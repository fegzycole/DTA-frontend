import validationRules from '../utils/validationRules';
import { errResponse } from '../utils/util';
import { validate } from '../utils/util';
const { product, productId } = validationRules;

export const validateProduct = (req, res, next) => {
  const { ...props } = req.body;
  const data = { ...props };
  validate(data, product, res, next);
};

export const validateId = (req, res, next) => {
  const { id } = req.params;
  const data = { id };
  validate(data, productId, res, next);
};

export const isImageUploaded = async (req, res, next) => {
  try {
    if (req.file) {
      const imageUrl = req.file;
      req.body.image = imageUrl.secure_url;
      return next();
    } else {
      return errResponse(res, 400, 'Please upload an image to continue');
    }
  } catch (error) {
    return errResponse(res, 400, error.message);
  }
};
