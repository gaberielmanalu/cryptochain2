import React from 'react';
import { render } from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import App from './components/App';
import Blocks from './components/Blocks';
import ConductTransaction from './components/ConductTransaction';
import Login from './components/Login';
import TransactionPool from './components/TransactionPool';
import Production from './components/Production';
import './index.css';

render(
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/home' component={App} />
      <Route path='/blocks' component={Blocks} />
      <Route path='/conduct-transaction' component={ConductTransaction} />
      <Route path='/transaction-pool' component={TransactionPool} />
      <Route path='/production' component={Production} />
    </Switch>
  </Router>,
  document.getElementById('root')
);