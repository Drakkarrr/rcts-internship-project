const Joi = require('joi');

const mongoose = require('mongoose');

const authUser = require('./authUser');

const MAX_FAILED_LOGIN_ATTEMPTS = Number(process.env.MAX_FAILED_LOGIN_ATTEMPTS || 5);
const LOGIN_LOCK_MINUTES = Number(process.env.LOGIN_LOCK_MINUTES || 15);

const login = async (req, res, { userModel }) => {
  const UserPasswordModel = mongoose.model(userModel + 'Password');
  const UserModel = mongoose.model(userModel);
  const { email, password } = req.body;

  // validate
  const objectSchema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: true } })
      .required(),
    password: Joi.string().required(),
  });

  const { error } = objectSchema.validate({ email, password });
  if (error) {
    return res.status(409).json({
      success: false,
      result: null,
      error: error,
      message: 'Invalid/Missing credentials.',
      errorMessage: error.message,
    });
  }

  const user = await UserModel.findOne({ email: email, removed: false });

  if (!user)
    return res.status(404).json({
      success: false,
      result: null,
      message: 'No account with this email has been registered.',
    });

  const databasePassword = await UserPasswordModel.findOne({ user: user._id, removed: false });

  if (!databasePassword)
    return res.status(404).json({
      success: false,
      result: null,
      message: 'No account with this email has been registered.',
    });

  if (databasePassword.lockUntil && new Date(databasePassword.lockUntil) > new Date()) {
    const retryAfterSeconds = Math.ceil(
      (new Date(databasePassword.lockUntil).getTime() - Date.now()) / 1000
    );

    return res.status(423).json({
      success: false,
      result: null,
      message: `Account temporarily locked due to multiple failed logins. Try again in ${Math.ceil(
        retryAfterSeconds / 60
      )} minute(s).`,
      retryAfterSeconds,
      failedLoginAttempts: databasePassword.failedLoginAttempts || 0,
    });
  }

  if (!user.enabled)
    return res.status(409).json({
      success: false,
      result: null,
      message: 'Your account is disabled, contact your account adminstrator',
    });

  // authUser if your has correct password
  authUser(req, res, {
    user,
    databasePassword,
    password,
    UserPasswordModel,
    maxFailedLoginAttempts: MAX_FAILED_LOGIN_ATTEMPTS,
    loginLockMinutes: LOGIN_LOCK_MINUTES,
  });
};

module.exports = login;
