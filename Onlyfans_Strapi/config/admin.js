module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6ae3eddb9dc677b9217dbb53e06428a3'),
  },
});
