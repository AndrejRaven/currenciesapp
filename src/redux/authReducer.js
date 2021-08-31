/* action name creator */
const reducerName = 'auth';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const LOGIN_SUCCESS = createActionName('LOGIN_SUCCESS');
const LOGIN_ERROR = createActionName('LOGIN_ERROR');
const SIGN_OUT = createActionName('SIGN_OUT');
const SIGN_UP = createActionName('SIGN_UP');
const SIGN_UP_ERR = createActionName('SIGN_UP_ERR');

/* action creators */
export const loginError = (payload) => ({ payload, type: LOGIN_ERROR });
export const loginSuccess = (payload) => ({ payload, type: LOGIN_SUCCESS });
export const logOut = (payload) => ({ payload, type: SIGN_OUT });
export const signingUp = (payload) => ({ payload, type: SIGN_UP });
export const SingingUpError = (payload) => ({ payload, type: SIGN_UP_ERR });

/* selectors */
export const signIn = (email, password) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch(loginSuccess());
      })
      .catch((err) => {
        dispatch(loginError(err.message || true));
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(logOut());
      });
  };
};

export const signUp = (email, password) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        dispatch(signingUp());
      })
      .catch((err) => {
        dispatch(SingingUpError(err.message || true));
      });
  };
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        ...statePart,
        authError: null
      };
    }
    case LOGIN_ERROR: {
      return {
        ...statePart,
        authError: action.payload
      };
    }
    case SIGN_OUT: {
      return statePart;
    }
    case SIGN_UP:
      return statePart;
    case SIGN_UP_ERR:
      return {
        ...statePart,
        authError: action.payload
      };
    default:
      return statePart;
  }
}
