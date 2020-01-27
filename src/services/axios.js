import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://arcane-beach-16254.herokuapp.com/'
  })
};
