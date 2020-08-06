import React, { Suspense, lazy } from 'react'
import {
   Redirect,
   Route,
   BrowserRouter as Router,
   Switch
} from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { sessionTokenState } from './state'
import { ROUTES } from './constants'

// Pages
const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'))
const TechsListPage = lazy(() => import('./pages/TechsListPage/TechsListPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'))

// Routes
const router = (
   <Router>
      <Suspense fallback={<div>Wait...</div>}>
         <Switch>
            <Route exact path={ROUTES.HOME} component={HomePage} />
            <Route exact path={ROUTES.LOGIN} component={LoginPage} />
            <PrivateRoute
               exact
               path={ROUTES.TECHS_LIST}
               component={TechsListPage}
            />
            <Route component={NotFoundPage} />
         </Switch>
      </Suspense>
   </Router>
)

function PrivateRoute(props) {
   const sessionToken = useRecoilValue(sessionTokenState)
   // if the user isn't logged, redirects to login page
   return sessionToken ? <Route {...props} /> : <Redirect to={ROUTES.LOGIN} />
}

export default router
