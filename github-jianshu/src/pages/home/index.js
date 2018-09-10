import React, { PureComponent } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/recommend';
import Writer from './components/Writer';
import { connect } from 'react-redux';
import { actionCreators} from './store'

import { 
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop,
} from './style';

class Home extends PureComponent {

    // 使用PureComponent替代Component时，会自带一个shouldComponentUpdata，可以有效提升组件的性能
    // 不过PureComponent要配合immutable.js组件(管理数据)配合使用
    // shouldComponentUpdata() {

    // }

    handleScrollTop() {
        console.log(1)
        window.scrollTo(0,0);
    }


    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src='//upload.jianshu.io/admin_banners/web_images/4421/dfbcbd1e8c27fc179209b8d0aa1060558ced4aba.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt=''/>
                    <Topic />
                    <List />
                
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {this.props.showScroll? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>:null}
                
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeData();
        // 绑定监听事件1
        this.bindEvents();
    }

    componentWillUnmount () {
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }

    //绑定监听事件2
    bindEvents() {
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
}

const mapStateToPorps = (state) => ({
    showScroll: state.getIn(['home','showScroll']),

})


const mapDispatch = (dispatch) => ({
    changeHomeData() {
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    },
    // 绑定监听事件变化3
    changeScrollTopShow() {
        console.log(document.documentElement.scrollTop);
        if(document.documentElement.scrollTop > 150) {
            dispatch(actionCreators.toggleTopShow(true))
        }else{
            dispatch(actionCreators.toggleTopShow(false))

        }
    }

})

export default connect(mapStateToPorps,mapDispatch)(Home);