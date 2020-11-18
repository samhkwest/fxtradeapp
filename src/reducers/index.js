import { coreReducers } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

export default coreReducers({
    router: routerReducer
});
