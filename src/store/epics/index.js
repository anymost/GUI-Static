import { combineEpics, createEpicMiddleware } from 'redux-observable';

const rootEpics = combineEpics();

const middleware = createEpicMiddleware(rootEpics);

export default middleware;