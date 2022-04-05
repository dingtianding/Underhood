import React from 'react';

import Home from './splash/splash';
import NavBarContainer from './splash/nav_bar_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import PortfolioContainer from './portfolio/portfolio_container';
// import StockShowContainer from './stocks/stock_show_container';

import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route';

export default () => (
  <div>
    <Route exact path="/" component={NavBarContainer}/>
    <Route exact path="/" component={Home} />
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
    <ProtectedRoute path="/portfolio" component={PortfolioContainer} />
    {/* <ProtectedRoute exact path="/stocks/:stockSymbol" component={StockShowContainer} /> */}
  </div>
);
