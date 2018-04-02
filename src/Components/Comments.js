import React from 'react'
import PropTypes from 'prop-types'

export default function Comments({comments}) {
    return (
        <section>
            <h4>{comments.user}</h4>
            <section>{comments.text}</section>
        </section>
    )
}
//
// Comments.propTypes = {
//     comments:PropTypes.shape({
//         text:PropTypes.string.isRequired,
//         user:PropTypes.string.isRequired
//     }).isRequired
// };