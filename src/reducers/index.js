import {combineReducers} from 'redux';

import filter from './filter';
import transport from './transport';

export default combineReducers({
    transport,
    filter
});