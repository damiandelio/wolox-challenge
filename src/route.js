import React, { Suspense, lazy } from 'react'
import {
   Redirect,
   Route,
   BrowserRouter as Router,
   Switch
} from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { isAuthenticatedState } from './state'

// Pages
const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'))
const TechsListPage = lazy(() => import('./pages/TechsListPage/TechsListPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'))

const router = (
   <Router>
      <Suspense fallback={<div>Wait a moment...</div>}>
         <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/login' component={LoginPage} />
            <PrivateRoute exact path='/techs-list' component={TechsListPage} />
            <Route component={NotFoundPage} />
         </Switch>
      </Suspense>
   </Router>
)

function PrivateRoute({ component: Component, ...rest }) {
   const [isAuthenticated] = useRecoilState(isAuthenticatedState)

   return (
      <Route
         {...rest}
         render={props =>
            isAuthenticated ? (
               <Component {...props} />
            ) : (
               <Redirect to='/login' />
            )
         }
      />
   )
}

export default router
