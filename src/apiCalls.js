import axios from 'axios'

const URL_BASE = 'http://private-8e8921-woloxfrontendinverview.apiary-mock.com'
const URL_LOGIN = URL_BASE + '/login'
const URL_TECHS = URL_BASE + '/techs'

export const logIn = ({ email, passwor }) => {
   return axios({
      method: 'post',
      url: URL_LOGIN,
      data: {
         email,
         passwor
      }
   })
}

export const getAllTechs = () => {
   return axios({
      method: 'get',
      url: URL_TECHS
   })
}
