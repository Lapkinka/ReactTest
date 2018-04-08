import React,{Component} from 'react'
import Article from './Article/index'
import PropTypes from 'prop-types'
import accordion from "../Decorators/accordion";
// import {filters} from '../AC'
import {connect} from 'react-redux'
import {filtrationArticlesSelector} from '../selectors/index'

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
        toggleOpenElem:PropTypes.func.isRequired
    };
    // state = {
    //     openArticleId : null
    // };
    render(){
        console.log("artlist")
        const{articles,openElemId,toggleOpenElem} = this.props;
        // filters(articles);
        const articlesElements = articles.map((elem) =>
            <li key={elem.id}>
            {/*<li key={elem.id} onClick = {toggleOpenElem(elem.id)}>*/}
            <Article article = {elem}
                     isOpen = {elem.id === openElemId}
                     toggleOpen = {toggleOpenElem(elem.id)}
            />
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

export default connect(state => ({articles:filtrationArticlesSelector(state)}))
(accordion(ArticleList))

// export default connect(({articles}) =>({articles}))(accordion(ArticleList))