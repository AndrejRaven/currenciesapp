import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { firebaseReducer, getFirebase } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import currenciesReducer from './currenciesRedux';
import authReducer from './authReducer';

// define initial state and shallow-merge initial data
const initialState = {
  currencies: {
    loading: {
      active: false,
      error: false
    },
    data: [],
    favourite: []
  },
  authError: null
};

// define reducers
const reducers = {
  currencies: currenciesReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach((item) => {
  if (typeof reducers[item] === 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument({ getFirebase })))
);

export default store;
