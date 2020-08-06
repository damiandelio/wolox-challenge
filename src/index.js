import React from 'react'
import ReactDOM from 'react-dom'
import { RecoilRoot } from 'recoil'
import * as serviceWorker from './serviceWorker'
import Router from './route'
import './globals.scss'

ReactDOM.render(
   <React.StrictMode>
      <RecoilRoot>{Router}</RecoilRoot>
   </React.StrictMode>,
   document.getElementById('root')
)

serviceWorker.unregister()
