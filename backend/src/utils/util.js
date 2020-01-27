import Validator from 'validatorjs';

export const errResponse = (res, statusCode, errors) => res.status(statusCode).json({
  status: 'error',
  errors,
});

export const successResponse = (res, statusCode, data) => res.status(statusCode).json({
  status: 'success',
  data,
});

export const validate = (data, rules, res, next) => {
  const validation = new Validator(data, rules);

  if (validation.fails()) {
    return errResponse(res, 400, validation.errors.all());
  }

  return next();
};