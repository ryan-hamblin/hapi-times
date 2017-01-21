import React from 'react';
import ReactDOM from 'react-dom';

import Login from './components/Login';
import Home from './components/Home';
import Upload from './components/Upload';
import Library from './components/Library';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path='/' component={ Home }>
      <IndexRoute component={ Upload } />
      <Route path='library' component={ Library } />
      <Route path='upload' component={ Upload } />
      <Route path='login' component={ Login } />
    </Route>
  </Router>,
  document.getElementById('app')
);