import axios from 'axios';


// create an axios instance
const service = axios.create({
  baseURL: 'https://jbraintest-zuul.myxjp.com', // api的base_url
  timeout: 120000 // request timeout
})

// 添加请求拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error) 
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  response => {
    console.log(response)
  },
  error => {
    console.log(error)
  }
)

export default service