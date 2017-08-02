import {combineReducers} from 'redux';

import filter from './filter';
import transport from './transport';
import submit from './submit';

export default combineReducers({
    transport,
    filter,
    submit
});