/*
The three principles of redux are as follows: (from: https://github.com/reactjs/redux/blob/master/docs/introduction/ThreePrinciples.md)
1) Everything that can change in your app, from Data to UI, is contained in a single object called the "state"
2) State is read-only.
    "Actions" are objects that describe how the state should be modified.
3) To modify the state (mutate) you write pure functions (no side effects) called "Reducers" that take the current state and the action being dispatched and return a new state

The "store" is a redux component that puts the above three priciples into action.
It contains the state of the app.
It allows you to dispatch actions.
It contains the reducers that will create a new state when actions are dispatched.

We configure the store differently in dev than in prod, as dev gets additional debugging tools.

process.env.NODE_ENV is a free global exported in webpack.config.js

*/
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { routerMiddleware, routeReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger();
const reduxRouterMiddleware = routerMiddleware(browserHistory);

export default function configureStore(initialState) {
    const store = createStore( //https://github.com/reactjs/redux/blob/master/docs/api/createStore.md
        rootReducer, //reducer
        initialState, //optional initialState
        compose(
            applyMiddleware( //enhancer
                thunkMiddleware,
                reduxRouterMiddleware,
                loggerMiddleware
            ),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
    // Required for replaying actions from devtools to work
    return store;
}