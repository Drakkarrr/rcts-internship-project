const { emailVerfication, passwordVerfication } = require('@/emailTemplate/emailVerfication');

const { Resend } = require('resend');

const sendMail = async ({
  email,
  name,
  link,
  idurar_app_email,
  subject = 'Verify your email | idurar',
  type = 'emailVerfication',
  emailToken,
}) => {
  // const resend = new Resend(process.env.RESEND_API);
  const resend = new Resend('re_gxGhMeAH_8YqADkzFCowX1JyUkR9rXvrX');

  const { data } = await resend.emails.send({
    from: idurar_app_email,
    to: email,
    subject,
    html:
      type === 'emailVerfication'
        ? emailVerfication({ name, link, emailToken })
        : passwordVerfication({ name, link }),
  });

  return data;
};

module.exports = sendMail;
