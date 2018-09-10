// import * as actionTypes from './constans';
import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    // 将data转换为immutable对象
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10),
})



export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS,
});

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR,
});

//使用了redux-thunk后完全可以返回一个函数
export const getList = () => {
    return (dispatch) => {
        // console.log(123);
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            // const action = changeList(data.data);
            dispatch( changeList(data.data));

        }).catch(() => {
            console.log('error');
        })
        // type: constants.GET_LIST
    }
};

export const mouseEnter = () =>({
    type: constants.MOUSE_ENTER,
});

export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE,
});

export const changepage = (page) => ({
    type: constants.CHANGE_PAGE,
    page,
})