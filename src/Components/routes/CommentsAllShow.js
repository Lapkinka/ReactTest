import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Route} from "react-router-dom"
import ShowPageComment from '../ShowPageComment/ShowPageComment'
import { loadAllComments} from '../../AC'
import {connect} from 'react-redux'

class CommentsAllShow extends PureComponent {
    static defaultProps = {};

    static propTypes = {};

    render() {
        console.log("sdhkhsdjhfhjsdhfkjsdh")
        return (
            <div>
                <Route path = "/comment/:page" render = {this.getPage}/>
            </div>
        );
    }
    getPage = ({match}) =>{
        const {page} = match.params
        const {loadAllComments} = this.props
        loadAllComments(page)
        return <ShowPageComment/>
    }
}

export default connect(null,({loadAllComments}))(CommentsAllShow);
