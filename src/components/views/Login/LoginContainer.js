import { connect } from 'react-redux';
import Login from './Login';
import { signIn } from '../../../redux/authReducer';

const mapStateToProps = (state) => ({
  authError: state.authError
});

const mapDispatchToProps = (dispatch) => ({
  signIn: (creds) => dispatch(signIn(creds))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
