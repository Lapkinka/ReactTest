import React,{Component} from 'react'
import Article from './Article/index'
import PropTypes from 'prop-types'
import accordion from "../Decorators/accordion";
import {loadArticles} from '../AC'
import {connect} from 'react-redux'
import {filtrationArticlesSelector} from '../selectors/filtrationArticlesSelector'
import Loader from './Loader/loader'
import {NavLink} from 'react-router-dom'

// export default function ArticleList({articles}) {
//     const articlesElements = articles.map((elem) => <li key={elem.id}><Article article = {elem}/></li>);
//     return(
//         <ul>
//             {articlesElements}
//         </ul>
//     )
// }

class ArticleList extends Component{
    static propTypes = {
        // from connect
        articles:PropTypes.array.isRequired,
        // from accordion
        openElemId:PropTypes.string,
        // toggleOpenElem:PropTypes.func.isRequired
        toggleOpenElem:PropTypes.func
    };
    static contextTypes = {
        choiceLanguage:PropTypes.string
    }
    componentWillMount(){
        this.props.loadArticles()
    }
    // componentWillReceiveProps({loadArticles}){
    //   loadArticles()
    // }

    // componentDidMount(){
    //     const {loading,loaded,loadArticles} = this.props
    //     // if (!loading || !loaded) loadArticles()
    //     if (!loading && !loaded) loadArticles()
    // }
    // state = {
    //     openArticleId : null
    // };
    render(){
        const{articles,openElemId,toggleOpenElem,loading} = this.props;
        if(loading) return <Loader choiceLanguage = {this.context.choiceLanguage}/>
        // filters(articles);
        const articlesElements = articles.map((elem) =>
            <li key={elem.id}>
                <NavLink to = {`/articles/${elem.id}`}  activeStyle = {{color:"blue"}}>
                    {elem.title}
                </NavLink>
            {/*<li key={elem.id} onClick = {toggleOpenElem(elem.id)}>*/}
            {/*<Article article = {elem}*/}
                     {/*isOpen = {elem.id === openElemId}*/}
                     {/*toggleOpen = {toggleOpenElem(elem.id)}*/}
            {/*/>*/}
            </li>);
        return(
          <ul>
            {articlesElements}
          </ul>
        )
    }
    // toggleOpenArticle(openArticleId){
    //     this.setState({
    //         openArticleId:openArticleId
    //     });
    // }
}

// export default accordion(ArticleList)

// export default connect(state =>({
//     articles:state.articles}))(accordion(ArticleList))

export default connect(state => ({
    articles:filtrationArticlesSelector(state),
    loading:state.articles.loading,
    // loaded:state.articles.loaded}),{loadArticles})(accordion(ArticleList))
    loaded:state.articles.loaded}),{loadArticles},null,{pure:false})(ArticleList)

// export default connect(({articles}) =>({articles}))(accordion(ArticleList))