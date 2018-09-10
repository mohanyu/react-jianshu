// import { combineReducers} from 'redux';
import { combineReducers } from 'redux-immutable';
// import headerReducer from '../common/hearder/store/reducer';
// import { reducer } from '../common/hearder/store/index.js';
import { reducer as headerReducer } from '../common/hearder/store';  // ==  /index.js
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as detailReducer} from '../pages/detail/store'

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
});
export default reducer;