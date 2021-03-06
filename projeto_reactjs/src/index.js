import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contato from './Contato';
import paginaPadrao from './paginaPadrao'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/Contato" component={Contato} />
    <Route exact path="*" component={paginaPadrao} />
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
