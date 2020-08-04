import React, { Suspense, lazy } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

// Pages
const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'))

const router = (
   <Router>
      <Suspense fallback={<div>Wait a moment...</div>}>
         <Switch>
            <Route exact path='/' component={HomePage} />
            <Route component={NotFoundPage} />
         </Switch>
      </Suspense>
   </Router>
)

export default router
