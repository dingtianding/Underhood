import { connect } from 'react-redux';
import { signup } from '../../actions/session';
import Signup from './signup';

const mSTP = state => (
  {
      errors: Object.values(state.sessionerr)
  }
)

const mDTP = dispatch => (
  {
      signup: (user) => dispatch(signup(user)),
      clearErrors: ()=> dispatch(clearErrors())
  }
)

export default connect(mSTP,mDTP)(Signup);
