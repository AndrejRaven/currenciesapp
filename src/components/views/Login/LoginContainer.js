import { connect } from 'react-redux';
import Login from './Login';
import { signIn, signOut } from '../../../redux/authReducer';

const mapStateToProps = (state) => ({
  authError: state.auth.authError,
  uid: state.firebase.auth.uid,
  email: state.firebase.auth.email
});

const mapDispatchToProps = (dispatch) => ({
  signIn: (email, password) => dispatch(signIn(email, password)),
  signOut: () => dispatch(signOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
