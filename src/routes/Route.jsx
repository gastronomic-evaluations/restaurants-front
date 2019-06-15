import React, { Suspense, lazy } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { RouteContext } from '../contexts/contexts'
import Loader from '../components/Loader'

const Home = lazy(() => import('pages/Home/Home'))
const Create = lazy(() => import('pages/Create/Create'))
const Edit = lazy(() => import('pages/Edit/Edit'))
const Detail = lazy(() => import('pages/Detail/Detail'))
const Error404 = lazy(() => import('pages/Error404/Error404'))


function getRouterComponent(Component) {
  return function getComponent(props) {
    return (
      <RouteContext.Provider value={props}>
        <Component />
      </RouteContext.Provider>
    )
  }
}

function Routes() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path='/' exact render={() => <Redirect to='/restaurants' />} />
          <Route path='/restaurants' exact component={getRouterComponent(Home)} />
          <Route path="/restaurants/create" exact component={getRouterComponent(Create)} />
          <Route path="/restaurants/details/:id" exact component={getRouterComponent(Detail)} />
          <Route path="/restaurants/:id" exact component={getRouterComponent(Edit)} />
          <Route component={getRouterComponent(Error404)} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default Routes