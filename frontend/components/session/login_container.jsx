import React from 'react';
import {login, clearErrors} from '../../actions/session_actions'
import { connect } from 'react-redux'
import Login from './login'


const mSTP = state => (
    {
        errors: Object.values(state.errors.session)
    }
)

const mDTP = dispatch =>(
    {
        login: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    }
)

export default connect(mSTP,mDTP)(Login)