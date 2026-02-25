const ONE_DAY_MS = 24 * 60 * 60 * 1000;
const ONE_YEAR_MS = 365 * ONE_DAY_MS;

const getAuthCookieOptions = ({ remember = false } = {}) => {
  const isProduction = process.env.NODE_ENV === 'production';
  const cookieDomain = process.env.COOKIE_DOMAIN;

  const options = {
    maxAge: remember ? ONE_YEAR_MS : ONE_DAY_MS,
    sameSite: isProduction ? 'None' : 'Lax',
    httpOnly: true,
    secure: isProduction,
    path: '/',
  };

  if (cookieDomain) {
    options.domain = cookieDomain;
  }

  return options;
};

module.exports = getAuthCookieOptions;
