import React, { Suspense, lazy } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { RouteContext } from '../contexts/contexts'
import Loader from '../components/Loader'

const RestaurantHome = lazy(() => import('pages/restaurants/Home/Home'))
const RestaurantCreate = lazy(() => import('pages/restaurants/Create/Create'))
const RestaurantEdit = lazy(() => import('pages/restaurants/Edit/Edit'))
const RestaurantDetail = lazy(() => import('pages/restaurants/Detail/Detail'))
const Wishlist = lazy(() => import('pages/wishlist/Home/Home'))
const WishCreate = lazy(() => import('pages/wishlist/Create/Create'))
const WishEdit = lazy(() => import('pages/wishlist/Edit/Edit'))
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
          <Route path='/restaurants' exact component={getRouterComponent(RestaurantHome)} />
          <Route path="/restaurants/create" exact component={getRouterComponent(RestaurantCreate)} />
          <Route path="/restaurants/details/:id" exact component={getRouterComponent(RestaurantDetail)} />
          <Route path="/restaurants/:id" exact component={getRouterComponent(RestaurantEdit)} />

          <Route path="/wishlist" exact component={getRouterComponent(Wishlist)} />
          <Route path="/wishlist/create" exact component={getRouterComponent(WishCreate)} />
          <Route path="/wishlist/edit/:id" exact component={getRouterComponent(WishEdit)} />

          <Route component={getRouterComponent(Error404)} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default Routes