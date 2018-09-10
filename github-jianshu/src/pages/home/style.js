import styled from 'styled-components';

export  const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
    // height: 300px;
    // background: cyan;
`
export const HomeLeft = styled.div`
    float: left;    
    margin-left: 15px;
    padding-top: 30px; 
    width: 625px;
    // height: ;
    // background: red;
    .banner-img {
        width: 625px;
        height: 270px;
    }

`
export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    background: #f0f8fc;
    border-bottom: 1px solid #dcdcdc;

`

export const TopicItem = styled.div`
    float: left;
    heigth: 32px;
    padding-right: 10px;
    margin-left: 16px;
    margin-bottom: 10px;
    line-height: 32px;
    font-size: 14px;
    color: #dcdcdc;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    background: #f7f7f7;
    .topic-pic {
        display: block;
        float: left;
        margin-right: 10px;
        width: 32px;
        heigth: 32px;

    }

`
export const HomeRight = styled.div`
    float: right;    
    width: 280px;
    // margin-left: 15px;
    padding-top: 30px; 
    // height: ;
    // background: purple;

`
export const ListItem = styled.div `
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1x soild #dcdcdc;
    border-radius: 10px;
    .pic {
        display: block;
        float: right;
        width: 125px;
        height: 100px;
    }

`
export const ListInfo = styled.div `
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        color: #333;
        font-size: 18px;
        font-weight: bold;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }

`
export const RecommendWrapper = styled.div`
    width: 280px;
    // margin: 30px 0;
    margin-bottom: 6px;
    border-radius: 4px;
`
export const RecommendItem = styled.div`
    height: 50px;
    width: 280px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
`

export const WriterWrapper = styled.div`
    width: 278px;
    height: 300px;
    line-height: 300px;
    text-align: center;
    line-height: 300px;
    bordr:1px solid #dcdcdc;
    background: darkcyan;
    border-redius: 4px;
`

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    margin: 30px 0;
    line-height: 40px;
    text-align: center;
    background: #a5a5a5;
    border-radius: 20px; 
    color: #fff;
    cursor: pointer;

`
export const  BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 80px;
    width: 80px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #777;
    background: cyan
`