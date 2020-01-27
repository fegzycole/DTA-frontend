import axios from './axios';

export default {
  addProduct (credentials) {
    return axios().post('/products', credentials)
  },
  getProducts () {
    return axios().get('/products/all')
  },
  getAProduct(id) {
    return axios().get(`/products/${id}/show`)
  }
}