const { config } = require('dotenv');

config();

const {
  DATABASE_DEV,
  DATABASE_PROD
} = process.env;

module.exports = {
  development: {
    use_env_variable: 'DATABASE_DEV',
    url: DATABASE_DEV,
    dialect: 'postgres',
  },
  production: {
    use_env_variable: 'DATABASE_PROD',
    url: DATABASE_PROD,
    dialect: 'postgres',
  },
};