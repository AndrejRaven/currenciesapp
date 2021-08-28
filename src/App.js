/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as firebase from 'firebase';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import MainLayout from './components/layout/MainLayout/MainLayout';
import store from './redux/store';
import Dashboard from './components/views/Dashboard/Dashboard';
import CurrenciesContainer from './components/views/Currencies/CurrenciesContainer';
import FavouriteContainer from './components/views/Favourite/FavouriteContainer';
import LoginContainer from './components/views/Login/LoginContainer';

const firebaseConfig = {
  apiKey: 'AIzaSyDJPzvpEdvA9bleHO-zGihhH_bKj2R9JkA',
  authDomain: 'currencyapp-81587.firebaseapp.com',
  databaseURL:
    'https://currencyapp-81587-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'currencyapp-81587',
  storageBucket: 'currencyapp-81587.appspot.com',
  messagingSenderId: '170161421311',
  appId: '1:170161421311:web:a84834bee2338c828405ca',
  measurementId: 'G-DPVF05H2H9'
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch
  // createFirestoreInstance // <- needed if using firestore
};

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter basename="/">
          <MainLayout>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/currencies" component={CurrenciesContainer} />
              <Route exact path="/favourite" component={FavouriteContainer} />
              <Route exact path="/login" component={LoginContainer} />
            </Switch>
          </MainLayout>
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
