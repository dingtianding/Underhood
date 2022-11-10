import {connect} from 'react-redux'
import {getCurrentUser, addFunds} from '../../actions/users_actions'

import Portfolio from './portfolio'

const mapStateToProps = (state) => ({
        user: state.entities.users[state.session.currentUser.id],
        errors: state.entities.errors || []

    })


const mapDispatchToProps = dispatch => ({
        getCurrentUser: userId => dispatch(getCurrentUser(userId)),
        addFunds: (userId, amount) => dispatch(addFunds(userId, amount))
    })


export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
