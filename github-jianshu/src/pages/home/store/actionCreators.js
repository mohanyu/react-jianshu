import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const changeHomeData = (result) =>({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
    
})

export const getHomeInfo = () => {
    return (dispatch) => {
            axios.get('/api/home.json').then((res) => {
                const result = res.data.data;
                // console.log(result);
                dispatch(changeHomeData(result))
            })
        }

    }

const addHomeList = (list,nextPage) => ({
    type: constants.ADD_ARTTCLE_LIST,
    // List 的功效并不完全等同于  fromJS
    list: fromJS(list),
    nextPage

})

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' +page).then((res) => {
            const result = res.data.data;
            console.log(result);
            dispatch(addHomeList(result, page + 1));

        })

    }
}

export const toggleTopShow = (show) => ({
    type: constants.TOGGLE_SCROLL_TOP,
    show
})