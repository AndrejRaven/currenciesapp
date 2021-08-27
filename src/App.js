/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import * as firebase from 'firebase/app';
import MainLayout from './components/layout/MainLayout/MainLayout';
import store from './redux/store';
import Dashboard from './components/views/Dashboard/Dashboard';
import CurrenciesContainer from './components/views/Currencies/CurrenciesContainer';
import FavouriteContainer from './components/views/Favourite/FavouriteContainer';
import Login from './components/views/Login/Login';

const firebaseConfig = {
  apiKey: 'AIzaSyDJPzvpEdvA9bleHO-zGihhH_bKj2R9JkA',
  authDomain: 'currencyapp-81587.firebaseapp.com',
  projectId: 'currencyapp-81587',
  storageBucket: 'currencyapp-81587.appspot.com',
  messagingSenderId: '170161421311',
  appId: '1:170161421311:web:a84834bee2338c828405ca',
  measurementId: 'G-DPVF05H2H9'
};

const rrfConfig = {
  userProfile: 'users'
};

firebase.initializeApp(firebaseConfig);

const rrfProps = {
  firebase,
  config: rrfConfig,
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
              <Route exact path="/login" component={Login} />
            </Switch>
          </MainLayout>
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
