import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { 
    RecommendWrapper,
    RecommendItem,


} from '../style'

class recommend extends PureComponent {

    render() {
        const { list } = this.props;
        return (
            <div>
                {
                    list.map((item) =>{
                    return (
                        <RecommendWrapper key={item.get('id')}>
                            <RecommendItem imgUrl={item.get('imgUrl')} />
                         </RecommendWrapper>
                         )

                    })

                }
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home','recommendList']),
})

export default connect(mapStateToProps,null)(recommend);