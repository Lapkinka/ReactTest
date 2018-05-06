import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import Loader from '../Loader/loader'

class ShowPageComment extends PureComponent {
    static defaultProps = {};

    static propTypes = {
        allComments:PropTypes.array.isRequired,
        page:PropTypes.string,
        loading:PropTypes.bool,
        loaded:PropTypes.bool,
        sum:PropTypes.number,
    };

    render() {
        const {allComments,page,loading,loaded,sum} = this.props
        console.warn("comments ---",allComments)
        // allComments.forEach(elem => console.log(elem))
        console.warn("page ---",page)
        console.warn("loading ---",loading)
        console.warn("loaded ---",loaded)
        console.warn("sum ---",sum)
        return (
            <div>
                return <h2>ya tyt</h2>
            </div>
        );
    }
}

export default connect(state =>{
    // console.warn(state)
    return {
        allComments:state.allComments.entities,
        page:state.allComments.page,
        loading:state.allComments.loading,
        loaded:state.allComments.loaded,
        sum:state.allComments.sum,
    }
})(ShowPageComment);
