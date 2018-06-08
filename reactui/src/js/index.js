import 'babel-polyfill';//required to make use of ES6 promises in the browser, which fetch (isomorphic-fetch) uses
import './polyfills';

import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './../content/main.less';

const store = configureStore();
render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('root')
);        
