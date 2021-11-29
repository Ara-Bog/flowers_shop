import {combineReducers} from 'redux';
import flowers from './flowers'
import basket from './basket';

const rootReducer = combineReducers({
    flowers,
    basket
})

export default rootReducer