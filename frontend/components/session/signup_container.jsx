import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import Signup from './signup';

const mSTP = state => (
  {
      errors: Object.values(state.errors.session)
  }
)

const mDTP = dispatch => (
  {
      signup: (user) => dispatch(signup(user)),
      login: (user) => dispatch(login(user)),
      clearErrors: ()=> dispatch(clearErrors())
  }
)

export default connect(mSTP,mDTP)(Signup);
