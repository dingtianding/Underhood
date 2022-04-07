import React from 'react';
import { Route,Switch, Redirect,withRouter } from "react-router-dom";

import Splash from './splash/splash';
import SplashBarContainer from './splash/splash_bar_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import PortfolioContainer from './portfolio/portfolio_container';
// import StockShowContainer from './stocks/stock_show_container';

import { AuthRoute, ProtectedRoute } from '../utils/route';

const App = () => (
  <div>
    <AuthRoute exact path="/signup" component={SignupContainer} />
    <AuthRoute exact path="/login" component={LoginContainer} />
    <AuthRoute exact path="/" component={SplashBarContainer}/>
    <AuthRoute exact path="/" component={Splash} />
    <ProtectedRoute path="/portfolio" component={PortfolioContainer} />
    {/* <ProtectedRoute exact path="/stocks/:stockSymbol" component={StockShowContainer} /> */}
  </div>
);
export default withRouter(App);
