import React,{Component} from 'react'
import ArticleList from '../ArticleList'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Article from "../Article";
import Counter from "../Counter";
import Filters from "../Filters";
import {ChangeWordsLanguage} from '../ChangeWordsLanguage'
import {Route} from "react-router-dom"


class Articles extends Component{
    static PropTypes = {
    };
    static contextTypes ={
      store:PropTypes.object,
      choiceLanguage:PropTypes.string
    }

    render(){
        return(
                <div>
                    <ArticleList/>
                    {/*<Route path = "/articles/:id" component = {Article}/>*/}
                    <Route path = "/articles" children = {this.getIndex} exact/>
                    <Route path = "/articles/:id" render = {this.getArticle}/>
                    {/*<Route path = "/articles" render = {this.getIndex} exact/>*/}

                </div>
        )
    }
    getArticle = ({match}) =>{
        const {id} = match.params
        return <Article id ={id} key = {id} isOpen/>
    }
    getIndex = ({ match }) =>{
        if (!match) return <h2>{ChangeWordsLanguage('this_article',this.context.choiceLanguage)}:</h2>
        return <h2>{ChangeWordsLanguage('select_article',this.context.choiceLanguage)}</h2>
    }

}


// export default CommentForm
export default Articles
