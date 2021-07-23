import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { Provider } from 'react-redux';
import store from './redux/store';
import Dashboard from './components/views/Dashboard/Dashboard';
import CurrenciesContainer from './components/views/Currencies/CurrenciesContainer';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={'/'}>
        <MainLayout>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
            <Route exact path={`${process.env.PUBLIC_URL}/currencies`} component={CurrenciesContainer} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;