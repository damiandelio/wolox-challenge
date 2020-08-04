import { atom } from 'recoil'

export const authenticationState = atom({
   key: 'isAuthenticatedState',
   default: {
      email: '',
      password: '',
      token: '',
      isAuthenticated: false
   }
})
