import React, { Component } from 'react';
// import React from 'react';

import {connect} from 'react-redux';
import { CSSTransition } from 'react-transition-group';
// import * as actionCreators from './store//actionCreator';
import { actionCreators } from './store/index';
import { Link } from 'react-router-dom';
//HeaderWrapper就是一个带样式的div标签而已

import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,

} from './style';


//{ getListArea(props.focused)}     props.focused传递参数(true 或者 false )  下方的getListArea中的show用来指代 props.focused
// getListArea = (show) => {

class Header extends Component{
     getListArea () {
         //使用解构赋值的方法，使得代码更简洁一些！！！
        const { focused, list, page , totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage}  = this.props;
        //由于引入list是immutable数组，它有一个toJS方法可以将immutable数组转化为普通的js数组，
        const newList = list.toJS();
        const pageList = [];

        //如果我们发送ajax并请求到数据，才循环
        if (newList.length) {
            for (let i = (page -1) * 10; i < page * 10; i++) {
                // console.log(newList[i]);
                pageList.push(
                <SearchInfoItem key={newList[i]}> { newList[i] }    </SearchInfoItem>
                )
            }
        }
        

        if(focused || mouseIn) {
            return (
                <SearchInfo 
                onMouseEnter={ handleMouseEnter }
                onMouseLeave={ handleMouseLeave }
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch
                            onClick={ () => handleChangePage(page, totalPage, this.spinIcon)}
                        >
                         <i ref={(icon) => {this.spinIcon = icon }} className="iconfont spin">&#xe621;</i>
                        换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>

                    <SearchInfoList>
                        {
                            pageList
                        }

                    </SearchInfoList>
                </SearchInfo>
            )
        }else {
            return null;
        }
    
    };


    render (){
        const { focused, handleInputFocus, handleInputBlur, list } = this.props;
        return (
            <HeaderWrapper>
        <Link to='/'>
            <Logo />
        </Link>
        
        <Nav>
            <NavItem className='left active'>首页</NavItem>
            <NavItem className='left'>下载APP</NavItem>
            <NavItem className='right'>登陆</NavItem>
            <NavItem className='right'>
                <i className="iconfont">&#xe6b1;</i>
        
            </NavItem>
            <SearchWrapper>
                <CSSTransition
                    in={ focused }
                    timeout={200}
                    classNames="slide"
                >
                    <NavSearch 
                        className={ focused ? 'focused': ''}
                        //绑定一个聚焦事件
                        onFocus={ () => handleInputFocus(list) }
                        //绑定一个失焦事件
                        onBlur={ handleInputBlur }
                    ></NavSearch>

                </CSSTransition>
                
                {/*如果this.state.focused的值是true，则i标签的类名是focused iconfont 如果是false，则其类名是原先的iconfont  */}
                <i className={ focused ? 'focused iconfont zoom': 'iconfont zoom'}>
                    &#xe600;
                </i> 
                { this.getListArea()}

                {/* <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>

                    <SearchInfoList>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                    </SearchInfoList>
                </SearchInfo> */}
            </SearchWrapper>
        </Nav>
        <Addition>
            <Button className='writting'>
                <i className="iconfont">&#xe608;</i> 
                写文章
            </Button>
            <Button className='reg'>注册</Button>
        </Addition>
    </HeaderWrapper>

        )
    }
};

// const Header = (props) => {
//     return(
           
//     )
// }


// class Header extends Component {
    // constructor(props) {
        // super(props);
        // 准备存到store中
        // this.state = {
        //     focused: false,
        // }
        // this.handleInputFocus = this.handleInputFocus.bind(this);
        // this.handleInputBlur = this.handleInputBlur.bind(this);
    // }
    // render () {
    //     return (

    //     )
    // }

    // handleInputFocus () {
        // this.setState({
        //     focused: true
        // })
    // }

    // handleInputBlur () {
        // this.setState({
        //     focused: false
        // })
    // }
// }

//和store做连接时store中的数据如何映射到我的props上面
//state参数指代接收到的store中的所有数据！
const mapStateToProps = (state) => {
    return {
        //将store中的focused值映射给focused
        // focused: state.header.focused
        //immutable不能通过.focused来获取这个值，而是要通过
        // focused: state.header.get('focused'),

        // focused: state.get('header').get('focused'),
        focused: state.getIn(['header','focused']), //等同于上述↑↑
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        totalPage: state.getIn(['header','totalPage']),
    
    }
        
}
//组件和store做连接想要改变store中的内容，要调用dispath方法
const mapDispathToProps = (dispatch) => {
    return{
        handleInputFocus(list) {
            // console.log(123);
            // const action = {
            //     type: 'search_focus'
            // };
            // const action = actionCreators.searchFocus();
            // console.log(list);
             (list.size === 0) && dispatch(actionCreators.getList())  
             dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            // const action =
            // const action = {
            //     type: 'search_blur'
            // };
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter () {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave () {
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage (page, totalPage, spin) {
            console.log(spin.style.transform);
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, []);
            console.log(originAngle)
            if(originAngle) {
                originAngle = parseInt(originAngle, 10);
            }else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg';
            // if (page) {}
            if (page < totalPage){
                dispatch(actionCreators.changepage(page + 1))
            }else {
                dispatch(actionCreators.changepage(1));
            }
            // console.log(page, totalPage)
            // dispatch(actionCreators.changepage());
        },
    }

    // handleInputBlur

}


// export default Header;
// connect方法生成新的组件，将header和store进行连接，就要将header组件名放到参数里
export default connect(mapStateToProps, mapDispathToProps) (Header);