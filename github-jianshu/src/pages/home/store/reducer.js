//immutable库提供给我们一个fromJS对象，他可以把 js对象转换成immutable、对象
import { fromJS } from 'immutable';
import * as constants from './constants';

// 将store中的默认数据放在这里
//defaultState对象转换成immutable对象！
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false,

});

//readucer导出的内容是一个纯函数,(给定固定的输入就有固定的输出，没有副作用，不改变参数)
const changeHomeData = (state,action) => {
    return state.merge({
        topicList:fromJS(action.topicList),
        articleList:fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
    });
    
}

const addHomeData = (state,action) => {
    return state.merge({
        'articleList': state.get('articleList').concat(action.list),
        'articlePage': action.nextPage,
    });
}


export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_HOME_DATA:
            return changeHomeData(state, action)
        case constants.ADD_ARTTCLE_LIST:
            return addHomeData(state, action)
        case constants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll', action.show);
        default:
        return state;
    }
}

