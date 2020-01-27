import axios from './axios';

export default {
  addProduct (credentials) {
    return axios().post('/products', credentials)
  },
  login (credentials) {
    return axios().post('/auth/signin', credentials)
  },
  getUserAccounts(token) {
    return axios().get(`/accounts/${sessionStorage.getItem('id')}/all`, token)
  }
}