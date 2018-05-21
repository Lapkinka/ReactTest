import React,{Component} from 'react'
import ArticleList from '../ArticleList'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Article from "../Article";
import Counter from "../Counter";
import Filters from "../Filters";
import ChangeWordsLanguage from '../ChangeWordsLanguage'
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
                    {/*<Route path = "/articles" render = {this.getIndex} exact/>*/}
                    <Route path = "/articles" children = {this.getIndex} exact/>
                </div>
        )
    }
    getArticle = ({match}) =>{
        const { id } = match.params
        // console.warn("ID",match.params)
        // console.warn("MATCH",match)
        return <Article id ={id} key = {id} isOpen/>
        // return <h1>Article id: {id}</h1>

    }
    getIndex = ({ match }) =>{
        if (!match) return <h2><ChangeWordsLanguage word = {'this_article'} symbol ={':'}/></h2>
        return <h2><ChangeWordsLanguage word = {'select_article'}/></h2>
    }

}


// export default CommentForm
export default Articles
