import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import configureStore from './store';

import User from './components/user/User';

ReactDOM.render(
 <Provider store={configureStore()}>
  <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/user" component= { User } />
                    <Route exact path="/" component= { App } />
                </Switch>
            </div>
        </BrowserRouter>
 </Provider>,
 document.getElementById('root')
);
registerServiceWorker();