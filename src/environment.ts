import {Int} from 'io-ts';

require('dotenv').config();

interface Environment {
  port: Int;
  test: boolean;
  isSSL: boolean;
  database: {
    url: string;
  };
  credentials: {
    test: {
      existingUserID: string;
    };
  };
}

export default {
  port: parseInt(process.env.PORT!),
  test: Boolean(process.env.TEST),
  isSSL: Boolean(process.env.IS_SSL),
  database: {
    url: process.env.DATABASE_URL,
  },
  credentials: {
    test: {
      existingUserID: 'exists',
    },
  },
} as Environment;
