import React, { Suspense } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { RouteContext } from '../contexts/contexts'
import Loader from '../components/Loader/Loader'
import {isAuthenticated} from '../services/auth'

import SignUp from 'pages/Auth/SignUp/SignUp'
import Login from 'pages/Auth/Login/Login'
import RestaurantHome from 'pages/restaurants/Home/Home'
import RestaurantCreate from 'pages/restaurants/Create/Create'
import RestaurantEdit from 'pages/restaurants/Edit/Edit'
import RestaurantDetail from 'pages/restaurants/Detail/Detail'
import Wishlist from 'pages/wishlist/Home/Home'
import WishCreate from 'pages/wishlist/Create/Create'
import WishEdit from 'pages/wishlist/Edit/Edit'
import Error404 from 'pages/Error404/Error404'
import Navitation from 'components/Navigation'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <RouteContext.Provider value={props}>
          <Component {...props} />
          <Navitation />
        </RouteContext.Provider>
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )
    }
  />
);

function Routes() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path='/' exact render={() => <Redirect to='/restaurants' />} />
          <Route path='/signUp' exact component={SignUp} />
          <Route path='/login' exact component={Login} />

          <PrivateRoute path='/restaurants' exact component={RestaurantHome} />
          <PrivateRoute path='/restaurants/create' exact component={RestaurantCreate} />
          <PrivateRoute path='/restaurants/details/:id' exact component={RestaurantDetail} />
          <PrivateRoute path='/restaurants/:id' exact component={RestaurantEdit} />

          <PrivateRoute path='/wishlist' exact component={Wishlist} />
          <PrivateRoute path='/wishlist/create' exact component={WishCreate} />
          <PrivateRoute path='/wishlist/edit/:id' exact component={WishEdit} />

          <Route component={Error404} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default Routes