import models from '../models';
import { errResponse, successResponse } from '../utils/util';

const { Product } = models;

export const addProduct = async (req, res) => {
  try {
    const { ...props } = req.body;
    const product = await Product.create(props);
    const id = product.getId();
    return successResponse(res, 201, id);
  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({ where: { id } });
    return successResponse(res, 201, product);
  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

export const getProducts = async (req, res) => {
  try {
    const data = [];
    const products = await Product.findAll();
    products.forEach((product) => {
      data.push(product.getRequiredDataValues());
    });

    return successResponse(res, 201, data);
  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};

export const getProductsWithFullDetails = async (req, res) => {
  try {
    const data = [];
    const products = await Product.findAll();
    products.forEach((product) => {
      data.push(product.dataValues);
    });

    return successResponse(res, 201, data);
  } catch (error) {
    return errResponse(res, 500, error.message);
  }
};
