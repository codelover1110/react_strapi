module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','1235788'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT','123455'),
  },
});
