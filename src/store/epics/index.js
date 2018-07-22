import { combineEpics, createEpicMiddleware } from 'redux-observable';

export const rootEpics = combineEpics();

export const epicMiddleware = createEpicMiddleware();

