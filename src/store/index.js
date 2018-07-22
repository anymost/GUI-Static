import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import { epicMiddleware, rootEpics } from './epics';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(epicMiddleware)));

epicMiddleware.run(rootEpics);

export default store;