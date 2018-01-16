import axios from 'axios'

const xhr = axios.create({
  baseURL: ''
})

xhr.interceptors.response.use(response => {
  console.log('xhr response', response)
  return response.data
}, error => {
  console.log('xhr error', error)
  return Promise.reject(error);
})

export default xhr
