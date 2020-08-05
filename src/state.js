import { atom } from 'recoil'

export const authenticationState = atom({
   key: 'authenticationState',
   default: {
      email: '',
      password: '',
      token: '',
      isAuthenticated: false
   }
})
