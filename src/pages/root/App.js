import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Callboard from '../callboard/Callboard';
import HomePage from '../homepage/HomePage';
import Navbar from '../../components/Navbar';
import store from '../../redux/store/store';
import FrontendRoutes from '../../routes/FrontendRoutes';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route component={HomePage} path="/" exact />
          <Route component={Callboard} path={FrontendRoutes.CALLBOARD} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
