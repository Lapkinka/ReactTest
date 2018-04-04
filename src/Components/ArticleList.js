import React,{Component} from 'react'
import Article from './Article/index'
import PropTypes from 'prop-types'
import accordion from "../Decorators/accordion";
// import {filters} from '../AC'
import {connect} from 'react-redux'

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

export default connect(({filters,articles}) => {
    // console.log("articles in connect",articles)
    const{selection,dataRange:{from,to}} = filters

    const filterArticles = articles.filter(elem =>{
        // console.log("elem.date",elem.date)
        let stateDate = Date.parse(elem.date)
        // console.log("stateDate",stateDate)
        // console.log("(!selection.length || selection.includes(elem.id))",(!selection.length || selection.includes(elem.id)))
        // console.log("(!from || !to || (stateDate > from && stateDate < to))",(!from || !to || (stateDate > from && stateDate < to)))
        console.log("!selection.length",!selection.length)
        console.log("selection.includes(elem.id)",selection.includes(elem.id))
        console.log("!from",!from)
        console.log("!to",!to)
        console.log("(stateDate > from && stateDate < to)",(stateDate > from && stateDate < to))
        return (!selection.length || selection.includes(elem.id)) &&
            (!from || !to || (stateDate > from && stateDate < to))
    })
    // console.log("filterArctiles in connect",filterArticles)
    return{
        articles:filterArticles
    }
})(accordion(ArticleList))

// export default connect(({articles}) =>({articles}))(accordion(ArticleList))