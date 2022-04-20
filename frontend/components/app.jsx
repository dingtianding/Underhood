import React from 'react';
import { Route,Switch, Redirect,withRouter } from "react-router-dom";

import Splash from './splash/splash';
import SplashBarContainer from './splash/splash_bar_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import PortfolioContainer from './portfolio/portfolio_container';
// import StockShowContainer from './stock/stock_show_container';

import { AuthRoute, ProtectedRoute } from '../utils/route';

const App = () => (
  <div>
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={LoginContainer} />

    <ProtectedRoute path="/portfolio" component={PortfolioContainer} />
    {/* <ProtectedRoute path="/stocks/AAPL" component={StockShowContainer} /> */}

    <AuthRoute path="/" component={SplashBarContainer}/>
    <AuthRoute path="/" component={Splash} />
  </div>
);
export default withRouter(App);
