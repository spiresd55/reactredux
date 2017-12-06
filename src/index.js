/*eslint-disable import/default */
import 'babel-polyfill'; //Polyfills transpile gapes
import React from 'react';
import { render } from 'react-dom'; //Allows Render to work
import { Router, browserHistory } from 'react-router'; //browserhistory handles the history, and gives nice urls
import routes from './routes'; //Import the routes for our routers
import './styles/styles.css'; //Can import styles :)
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; //Can import other css libraries
import '../node_modules/toastr/build/toastr.min.css';
import configureStore from './store/configureStore.dev';
import {loadCourses} from "./actions/courseActions";
import {loadAuthors} from "./actions/authorActions";
import {Provider} from 'react-redux';

//Would set initial state if using server
const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} /></Provider>,
  document.getElementById('app')
);
