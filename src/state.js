import { atom } from 'recoil'
import { STORAGE_SESSION_KEY } from './constants'

export const sessionTokenState = atom({
   key: 'sessionTokenState',
   default: localStorage.getItem(STORAGE_SESSION_KEY)
})
