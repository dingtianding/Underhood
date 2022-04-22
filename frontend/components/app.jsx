import React from 'react';
import { Route, Switch, Redirect,withRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/route';

import Splash from './splash/splash';
import SplashBarContainer from './splash/splash_bar_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import PortfolioContainer from './portfolio/portfolio_container';
import AssetShowContainter from './asset/asset_show_container';


const App = () => (
  <div>
    <Route exact path="/" component={SplashBarContainer}/>
    <Route exact path="/" component={Splash} />

    <Switch>
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
    <ProtectedRoute path="/portfolio" component={PortfolioContainer} />
    <ProtectedRoute path='/assets/:assetSymbol' component={AssetShowContainter} />
    </Switch>
  </div>
);
export default withRouter(App);
