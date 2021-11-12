import request from '@/utils/request.js'

const login = {
  /* 登录 */
  loginByUsername: (username, password, brain) => {
    return request({
      url: '/API-SYSTEM/login',
      method: 'post',
      params: {
        username: username,
        password: password,
        loginSys: brain,
        code: 'code'
      }
    })
  },
}

export default login
