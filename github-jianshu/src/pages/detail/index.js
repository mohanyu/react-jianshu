import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';

import {
    DetailWrapper,
    Header,
    Content,


} from './style';

class Detail extends Component {
    render() {
        console.log(this.props.title);
        console.log(this.props);
        console.log(this.props.location.search);
        console.log(this.props.match.params.id);
        const { title, content,}  = this.props;
        return (
            <DetailWrapper>
                <Header>{ title }</Header>
                <Content dangerouslySetInnerHTML={{__html: content}}>
                    {/* { content }       */}
                </Content>

            </DetailWrapper>
            
        )
    }
    componentDidMount () {
        this.props.getDetail(this.props.match.params.id);

    }
}

const mapStateToProps = (state) => ({
    title: state.getIn(['detail','title']),
    content: state.getIn(['detail','content']),


})

const mapDispatch = (dispatch) =>({
    getDetail (id) {
        dispatch(actionCreators.getDetail(id))

    }

})


export default connect(mapStateToProps,mapDispatch)(Detail);