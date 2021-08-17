import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainLayout from './components/layout/MainLayout/MainLayout';
import store from './redux/store';
import Dashboard from './components/views/Dashboard/Dashboard';
import CurrenciesContainer from './components/views/Currencies/CurrenciesContainer';
import FavouriteContainer from './components/views/Favourite/FavouriteContainer';
import Login from './components/views/Login/Login';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
