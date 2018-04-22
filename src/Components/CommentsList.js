import React,{Component} from 'react'
import Comments from './Comments'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import toggleOpen from '../Decorators/toggleOpen'
import CommentForm from "./CommentForm/index";
import {loadComment} from '../AC/index'
import Loader from './Loader/loader'
import {filtrationArticlesSelector} from "../selectors/filtrationArticlesSelector";

class CommentsList extends Component {
    componentWillReceiveProps({isOpen, loadComment, article}) {
        // if(isOpen) loadArt(article.id)
        // if(!this.props.isOpen && isOpen && !article.text && !article.loading) loadArt(article.id)
        if (!this.props.isOpen && isOpen && !article.commentsLoading && !article.commentsLoaded) {
            loadComment(article.id)
        }
    }

    // constructor(props){
    //     super(props);
    //     CommentsList.defaultProps = {
    //         comments:[]
    //     };
    //     this.state = {
    //         enable:false
    //     }
    // }
    // static defaultProps = {
    //     comments:[]
    // };
    // state = {
    //     enable:false
    // };
    render() {
        const {toggleOpen, isOpen, article} = this.props;
        // console.warn("comments in CommentsList",this.props.comments)
        return (
            <section>
                <button onClick={toggleOpen}>{isOpen ? "hide comment" : "show comment"}</button>
                {getBody({article, isOpen})}
            </section>
        )
    }
}
CommentsList.propTypes = {
    // articleId:PropTypes.string.isRequired,
    // comments:PropTypes.array.isRequired

    comments:PropTypes.array,
    isOpen:PropTypes.bool,
    toggleOpen:PropTypes.func

};
    // componentWillReceiveProps({isOpen,loadComment,comments,articleId}){
    //     console.warn("--------------------------",isOpen)
    //     console.warn("--------------------------",loadComment)
    //     console.warn("--------------------------",comments)
    //     console.warn("--------------------------",articleId)
    //     // if(isOpen) loadArt(article.id)
    //     // if(!this.props.isOpen && isOpen && !article.text && !article.loading) loadArt(article.id)
    //     if(isOpen && !comments.text && !comments.loading) loadComment(articleId)
    // }
function getBody({article:{comments = [], id, commentsLoaded, commentsLoading},isOpen}) {
        // const {comments,articleId,isOpen} = this.props;
        // const {article:{comments = [], id, commentsLoaded, commentsLoading},isOpen} = this.props;
        console.warn(comments,"comments")
        if(!isOpen) return null
        if(commentsLoading) return <Loader/>
        if(!commentsLoaded) return null

        if(!comments.length) return(<section>No comments</section>);
        return(
            <section>
                {comments.map(elem => <Comments key = {elem}  id = {elem}/>)}
                <CommentForm id = {id}/>
            </section>
        )
    }
    // toggleOpen = () => {
    //     this.setState({
    //         enable:!this.state.enable
    //     });
    // }

export default connect(null,{loadComment})(toggleOpen(CommentsList))