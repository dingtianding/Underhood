import React from 'react'
import {connect} from 'react-redux'
import {getCurrentUser} from '../../actions/users_actions'
import Portfolio from './portfolio'

class PortfolioContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getCurrentUser(this.props.session.id)
    }

    render() {

        return (
            <Portfolio theme={this.props.theme} logout={this.props.logout} user={this.props.user} component="Portfolio"></Portfolio>
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
        getCurrentUser: userId => dispatch(getCurrentUser(userId))
    }
)

export default connect(mSTP,mDTP)(PortfolioContainer)