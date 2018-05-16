import React,{Component,PureComponent} from 'react'
import PropTypes from 'prop-types'
import {findDOMNode} from 'react-dom'
import CommentsList from '../CommentsList'
import {connect} from 'react-redux'
import {deleteArticle,loadArt} from '../../AC'
import Loader from '../Loader/loader'
// import toggleOpen from '../Decorators/toggleOpen'
import {CSSTransitionGroup} from 'react-transition-group'
import './style.css'

class Article extends Component{
    static propTypes = {
        // article:PropTypes.object.isRequired
        id:PropTypes.string.isRequired,
        isOpen:PropTypes.bool,
        toggleOpen:PropTypes.func,
        //connect
        article:PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            text: PropTypes.string
        })
    };

    state = {
        updateIndex: 0
    };

    // componentWillReceiveProps({isOpen,loadArt,article}){
    //     // if(isOpen) loadArt(article.id)
    //     // if(!this.props.isOpen && isOpen && !article.text && !article.loading) loadArt(article.id)
    //     if(isOpen && !article.text && !article.loading) loadArt(article.id)
    //
    // }
    componentDidMount(){
        const {loadArt,article,id} = this.props
        // if(isOpen) loadArt(article.id)
        // if(!this.props.isOpen && isOpen && !article.text && !article.loading) loadArt(article.id)
        if(!article || (!article.text && !article.loading)) loadArt(id)

    }
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         isOpen:false
    //     };
    //     // this.toggleOpen = this.toggleOpen.bind(this)
    // }

    // componentWillMount(){
    //     debugger;
    // }

    // shouldComponentUpdate(nextProps,textState){
    //     console.log("nextProps",nextProps.isOpen)
    //     console.log("this.props.isOpen",this.props.isOpen)
    //     return nextProps.isOpen !== this.props.isOpen
    // }

    render(){
        // this.article = this.props.article;
        // console.log("render",this.state.isOpen);
        // const {article} = this.props;
        console.warn("update article")

        const {isOpen,article,toggleOpen} = this.props;
        // console.warn(article,"article")
        if(!article) return null
        return(
        <section>
            {/*<h3>{this.article.title}</h3>*/}
            <h3>{article.title}</h3>
            <button onClick={toggleOpen}>{isOpen ? 'close' : 'open'}</button>
            <button onClick={this.handleDelete}>delete</button>
            {/*<button onClick={this.toggleOpen}>{isOpen ? 'close' : 'open'}</button>*/}
            <CSSTransitionGroup
                transitionName = 'article'
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}
                component = 'div'
            >
                {this.getBody()}
            </CSSTransitionGroup>
        </section>
        )
    }
    handleDelete = () => {
        const {deleteArticle, article} = this.props
        deleteArticle(article.id)
        console.log("---","deleteHandle")
    }
    // componentDidMount(){s
    //     debugger
    // }
    getBody () {
        const {isOpen,article} = this.props;
        if(article.loading) return <Loader/>
        if(isOpen){
            return(
                <section>
                    {/*{this.article.text}*/}
                    {/*<CommentsList comments = {this.article.comments}/>  */}
                    {article.text}
                    <button onClick = {() => this.setState({updateIndex:this.state.updateIndex + 1})}>update</button>
                    {/*<CommentsList articleId = {article.id} comments = {article.comments} ref = {this.setCommentsRef} key = {this.state.updateIndex}/>*/}
                    <CommentsList article = {article} ref = {this.setCommentsRef} key = {this.state.updateIndex}/>
                </section>
            )
        }
        else return null;
    };
    setCommentsRef = ref =>{
        console.log("---",ref)
        console.log("---",findDOMNode(ref))
    }
    // toggleOpen = () => {
    //     this.setState({isOpen:!this.state.isOpen});
    //     console.log("SETSTATE",this.state.isOpen);
    // }
}

// export default toggleOpen(Article)
// export default Article
export default connect((state,ownProps) => ({article:state.articles.entities.get(ownProps.id)})
  ,{deleteArticle,loadArt},
  null,
  {pure:false})(Article)