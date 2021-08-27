/* selectors */

/* action name creator */
const reducerName = 'auth';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const LOGIN_SUCCESS = createActionName('LOGIN_SUCCESS');
const LOGIN_ERROR = createActionName('LOGIN_ERROR');

/* action creators */
export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
      })
      .catch((err) => {
        dispatch({ type: 'LOGIN_ERROR', err });
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
        authError: 'Login error'
      };
    }
    default:
      return statePart;
  }
}
