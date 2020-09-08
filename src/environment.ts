require('dotenv').config();

export default {
  port: parseInt(process.env.PORT!),
  test: Boolean(process.env.TEST),
  credentials: {
    test: {
      existingUserID: 'exists',
    },
  },
};
