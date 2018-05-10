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
        const {allComments,page,loading,loaded} = this.props
        console.log("loading",loading)
        console.log("loaded",loaded)
        if(page <= 0) return(<section>Enter a positive number</section>);
        let beginning = (page - 1) * 5
        let end = 5 * page
        let nowPageCount = [...allComments.slice(beginning,end)]
        if(loading) return <Loader/>
        if(!nowPageCount.length) return(<section>No comments on this page, please enter another</section>);
        return (
            <div>
                <span>allComments:{allComments.length}</span>
                <br/><br/>
                {nowPageCount.map((elem,i) => {
                    return (
                        <div key={i}>
                            <span>"id":{elem.id}</span>
                            <br/><br/>
                            <span>"user":{elem.user}</span>
                            <br/><br/>
                            <span>"text":{elem.text}</span>
                            <br/><br/>
                        </div>)
                })
                }
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
