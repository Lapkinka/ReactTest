import React,{Component} from 'react'
import ArticleList from '../ArticleList'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Article from "../Article";
import Counter from "../Counter";
import Filters from "../Filters";
import {Route} from "react-router-dom"


class Articles extends Component{
    static PropTypes = {
    };

    render(){
        return(
                <div>
                    <ArticleList/>
                    {/*<Route path = "/articles/:id" component = {Article}/>*/}
                    <Route path = "/articles/:id" render = {this.getArticle}/>
                </div>
        )
    }
    getArticle = ({match}) =>{
        const { id } = match.params
        return <Article id ={id} key = {id} isOpen/>
        // return <h1>Article id: {id}</h1>

    }

}


// export default CommentForm
export default Articles
