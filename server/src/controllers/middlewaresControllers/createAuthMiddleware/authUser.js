const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const getAuthCookieOptions = require('./getAuthCookieOptions');

const authUser = async (
  req,
  res,
  {
    user,
    databasePassword,
    password,
    UserPasswordModel,
    maxFailedLoginAttempts = 5,
    loginLockMinutes = 15,
  }
) => {
  const isMatch = await bcrypt.compare(databasePassword.salt + password, databasePassword.password);

  if (!isMatch) {
    const failedLoginAttempts = (databasePassword.failedLoginAttempts || 0) + 1;
    const shouldLock = failedLoginAttempts >= maxFailedLoginAttempts;
    const lockUntil = shouldLock
      ? new Date(Date.now() + loginLockMinutes * 60 * 1000)
      : databasePassword.lockUntil;

    await UserPasswordModel.findOneAndUpdate(
      { user: user._id },
      {
        failedLoginAttempts,
        lockUntil: shouldLock ? lockUntil : null,
      },
      { new: true }
    ).exec();

    return res.status(403).json({
      success: false,
      result: null,
      failedLoginAttempts,
      message: shouldLock
        ? `Account temporarily locked due to multiple failed logins. Try again in ${loginLockMinutes} minute(s).`
        : 'Invalid credentials.',
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: req.body.remember ? 365 * 24 + 'h' : '24h' }
  );

  await UserPasswordModel.findOneAndUpdate(
    { user: user._id },
    {
      $push: { loggedSessions: token },
      failedLoginAttempts: 0,
      lockUntil: null,
    },
    {
      new: true,
    }
  ).exec();

  return res
    .status(200)
    .cookie('token', token, getAuthCookieOptions({ remember: req.body.remember }))
    .json({
      success: true,
      result: {
        _id: user._id,
        name: user.name,
        surname: user.surname,
        role: user.role,
        email: user.email,
        photo: user.photo,
      },
      message: 'Successfully login user',
    });
};

module.exports = authUser;
