import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Route} from "react-router-dom"
import ShowPageComment from '../ShowPageComment/ShowPageComment'
import {loadAllComments} from '../../AC'
import {connect} from 'react-redux'

class CommentsAllShow extends PureComponent {
    static defaultProps = {};
    static propTypes = {};

    render() {
        return <Route path = "/comments/:page" render = {this.getPage}/>;
    }
    getPage = ({match}) =>{
        const {page} = match.params
        return <ShowPageComment page={page}/>
    }
}

export default connect(null,({loadAllComments}))(CommentsAllShow);
