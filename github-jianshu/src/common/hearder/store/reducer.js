import * as constants from './constants';
//immutable库提供给我们一个fromJS对象，他可以把 js对象转换成immutable、对象
import { fromJS } from 'immutable';

// 将store中的默认数据放在这里
//defaultState对象转换成immutable对象！
const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1,
});

//readucer导出的内容是一个纯函数,(给定固定的输入就有固定的输出，没有副作用，不改变参数)

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.SEARCH_FOCUS : {
            return state.set('focused', true);
        };
        case constants.SEARCH_BLUR : {
            return state.set('focused', false);
        };
        case constants.CHANGE_LIST : {
            // set('list', action.data).set('totalPage',action.totalPage);    merge方法可以将两个state.set合并！
            return state.merge({
                list: action.data,
                totalPage: action.totalPage,
            })
        };
        case constants.MOUSE_ENTER : {
            return state.set('mouseIn', true);
        };
        case constants.MOUSE_LEAVE : {
            return state.set('mouseIn', false);
        };
        case constants.CHANGE_PAGE : {
            return state.set('page', action.page);
        }
        default :
        return state;
    }
}

