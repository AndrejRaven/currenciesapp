import { connect } from 'react-redux';
import Login from './Login';
import { signIn } from '../../../redux/AuthReducer';

const mapDispatchToProps = (dispatch) => ({
  signIn: (creds) => dispatch(signIn(creds))
});

export default connect(null, mapDispatchToProps)(Login);
