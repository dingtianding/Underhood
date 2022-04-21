import React from 'react';
import { Route, Switch, Redirect,withRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/route';

import Splash from './splash/splash';
import SplashBarContainer from './splash/splash_bar_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import PortfolioContainer from './portfolio/portfolio_container';
// import AssetShowContainter from './asset_detail/asset_show_container';


const App = () => (
  <div>
          <Switch>
          <AuthRoute path="/signup" component={SignupContainer} />
          <AuthRoute path="/login" component={LoginContainer} />
          <ProtectedRoute path="/portfolio" component={PortfolioContainer} />
          {/* <ProtectedRoute path='/assets/:assetSymbol' component={AssetShowContainter} /> */}
          <AuthRoute path="/" component={SplashBarContainer}/>
          <AuthRoute path="/" component={Splash} />
        </Switch>

  </div>
);
export default withRouter(App);
