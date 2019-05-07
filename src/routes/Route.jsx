import React, { Suspense, lazy } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { RouteContext } from '../contexts/contexts'

const Home = lazy(() => import('../components/Home'))
const Create = lazy(() => import('../components/Create'))
const Error404 = lazy(() => import('../components/Error404'))

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
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route path='/' exact component={getRouterComponent(Home)} />
          <Route path="/create" exact component={getRouterComponent(Create)} />
          <Route component={getRouterComponent(Error404)} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default Routes