import React from 'react';
import NavBarContainer from './splash/nav_bar_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import PortfolioContainer from './portfolio/portfolio_container';
import Home from './splash/splash';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';

export default () => (
  <div>
    <Route exact path="/" component={NavBarContainer}/>
    <Route exact path="/" component={Home} />
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
    <ProtectedRoute path="/portfolio" component={PortfolioContainer} />
  </div>
);
