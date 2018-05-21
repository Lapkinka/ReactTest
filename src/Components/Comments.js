import React from 'react'
import {connect} from "react-redux"
import PropTypes from 'prop-types'
// import comments from "../reducer/comments";
import {commentsSelectorFactory} from '../selectors/commentsSelector'

function Comments({comments}) {
    if(comments === undefined) return null
    return (
        <section>
            <h4>{comments.user}</h4>
            <section>{comments.text}</section>
        </section>
    )
}

Comments.propTypes = {
    id:PropTypes.string.isRequired,
    //from connect
    comments:PropTypes.shape({
        // text:PropTypes.string.isRequired,
        text:PropTypes.string.isRequired,
        user:PropTypes.string.isRequired
    })
};

const mapStateToProps = () => {
    const commentSelector = commentsSelectorFactory()
    return(state,ownProps) => {
        return {
            comments:commentSelector(state,ownProps)
        }
    }
}

export default connect(mapStateToProps)(Comments)