import React from 'react'
import {connect} from 'react-redux'
import {logout} from '../../actions/session'
import {getCurrentUser} from '../../actions/users'
import NavBar from './nav_bar'

class NavBarContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getCurrentUser(this.props.session.id)
    }

    render() {
        return (
            <NavBar theme={this.props.theme} user={this.props.user} logout={this.props.logout}/>
        )
    }
}

const mSTP = state =>(
    {
        session: state.session,
        user: state.user,
        theme: state.theme
    }
)

const mDTP = dispatch =>(
    {
        logout: () => dispatch(logout()),
        getCurrentUser: userId => dispatch(getCurrentUser(userId)),
    }
)

export default connect(mSTP,mDTP)(NavBarContainer)