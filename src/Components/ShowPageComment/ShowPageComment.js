import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import Loader from '../Loader/loader'

class ShowPageComment extends PureComponent {
    static defaultProps = {};

    static propTypes = {
        allComments:PropTypes.object,
        page:PropTypes.string,
        loading:PropTypes.bool,
        loaded:PropTypes.bool
    };

    render() {
        const {allComments,page,loading,loaded} = this.props
        console.warn("comments ---",allComments)
        console.warn("page ---",page)
        console.warn("loading ---",loading)
        console.warn("loaded ---",loaded)
        return (
            <div>
                return <h2>ya tyt</h2>
            </div>
        );
    }
}

export default connect(state =>{
    console.warn(state)
    return {
        comments:state.allComments.entities,
        page:state.allComments.page,
        loading:state.allComments.loading,
        loaded:state.allComments.loaded
    }
})(ShowPageComment);
