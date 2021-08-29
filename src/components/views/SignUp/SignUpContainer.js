import { connect } from 'react-redux';
import SignUp from './SignUp';
import { signUp, signOut } from '../../../redux/authReducer';

const mapStateToProps = (state) => ({
  authError: state.auth.authError,
  uid: state.firebase.auth.uid
});

const mapDispatchToProps = (dispatch) => ({
  signUp: (email, password) => dispatch(signUp(email, password)),
  signOut: () => dispatch(signOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
