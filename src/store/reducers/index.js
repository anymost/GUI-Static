import { combineReducers } from 'redux';
import message from './message';
import programStatus from './programStatus';

export default combineReducers({
    message,
    programStatus
});
