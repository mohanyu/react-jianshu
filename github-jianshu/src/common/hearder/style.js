import styled from 'styled-components';
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
`;
//将a标签的额跳转添加到css样式文件中
// export const  Logo = styled.a.attrs({
    // href: '/'
export const  Logo = styled.div`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    height:100%;
    margin: 0 auto;
    padding-right: 70px;
    box-sizing: border-box;
`

//如果NavItem这个组件下class名字为left或者right的话，那么应用此样式！
export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696
    }
    &.active {
        color: #ea6f5a;
    }

`
export const SearchWrapper = styled.div `
    position: relative;
    float: left;
    // background: red;
    
    //<i>子组件的样式
    .zoom {
        position: absolute;
        bottom: 5px;
        right: 5px;
        width: 30px;
        font-size: 18px;
        line-height: 30px;
        text-align: center;
        border-radius: 15px;
        // 如果有类名是focused的话，则改变背景颜色和字体颜色
        &.focused {
            background: #777;
            color: #fff;
        }



        background: green;

    }
`


export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    margin-top: 9px;
    margin-left: 20px;
    padding: 0 30px 0 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #666;
    &::placeholder {
        color: #999;
    }
    // 如果此组件含有类名是focused（而不是子组件！），则赋予以下样式
    &.focused {
        width: 240px;
    }
    &.slide-enter {
        // width: 160px;
        transition: all .3s ease-out;
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        transition: all .3s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }

`

export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    // height: 100px;
    padding: 0 20px;
    background: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);

`
export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-botton: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`
export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    cursor: pointer;
    .spin {
        display: block;
        float: left;
        font-size: 15px;
        margin-right: 4px;
        transition: all .2s ease-in;
        // transform: rotate(0deg);
        transform-origin: center center;
    }

`
export const SearchInfoList = styled.div`
    margin-top: 10px;
    overflow: hidden; 
`

export const SearchInfoItem  = styled.a`
    display: block;
    float: left;
    margin-right: 15px;
    margin-bottom: 10px;
    line-height: 20px;
    padding: 0 5px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 5px;
`

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;


`
export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border: 1px solid #ec6149;
    border-radius: 19px;
    font-size: 14px;
    &.reg {
        color: #ec6149;
    }
    &.writting {
        color: #fff;
        background: #ec6149;
    }

`

