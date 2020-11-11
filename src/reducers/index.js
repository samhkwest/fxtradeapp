import { combineReducers } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

export default combineReducers({
    router: routerReducer
});
