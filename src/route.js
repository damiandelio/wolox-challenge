import React, { Suspense, lazy } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { useHistory } from 'react-router-dom'
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
   const history = useHistory()
   // if the user isn't logged, redirects to login page
   if (!sessionToken) {
      history.replace(ROUTES.LOGIN)
      return null
   }

   return <Route {...props} />
}

export default router
