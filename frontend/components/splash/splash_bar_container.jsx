import React from 'react';
import {connect} from 'react-redux';
import SplashBar from './splash_bar';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  user: state.entities.users

});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(SplashBar);