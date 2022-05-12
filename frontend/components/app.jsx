import React from 'react';
import { Switch, withRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Splash from './splash/splash';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import PortfolioContainer from './portfolio/portfolio_container';
import AssetShowContainter from './asset/asset_show_container';


const App = () => (
  <div>
    <Switch>
    <AuthRoute exact path="/" component={Splash} />
    <AuthRoute exact path="/signup" component={SignupContainer} />
    <AuthRoute exact path="/login" component={LoginContainer} />
    <ProtectedRoute exact path="/portfolio" component={PortfolioContainer} />
    <ProtectedRoute exact path='/assets/:assetSymbol' component={AssetShowContainter} />
    </Switch>
  </div>
);
export default withRouter(App);
