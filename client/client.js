import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Redirect, hashHistory} from 'react-router';
import Homepage from '../pages/Home';
import Homepage2 from '../pages/Home2';
import App from '../pages/App';
/*import App from '../components/App';*/
import configureStore from '../redux/store';
import { Provider } from 'react-redux';
require("../css/style.css");

let initialState = {
  todos: [{
    id: 0,
    completed: false,
    text: 'Initial todo for demo purposes'
  }],
  user: {
    username: 'Nuwan',
    id: 1
  }
}

let store = configureStore(initialState)
render(
  <Provider store={store}>
     <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Homepage}></IndexRoute>
            <Route path="page2" component={Homepage2}></Route>
        </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
