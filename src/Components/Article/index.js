import React,{Component,PureComponent} from 'react'
import PropTypes from 'prop-types'
import {findDOMNode} from 'react-dom'
import CommentsList from '../CommentsList'
import {connect} from 'react-redux'
import {deleteArticle} from '../../AC'
// import toggleOpen from '../Decorators/toggleOpen'
import {CSSTransitionGroup} from 'react-transition-group'
import './style.css'

class Article extends PureComponent{
    static propTypes = {
        // article:PropTypes.object.isRequired
        article:PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired,
        isOpen:PropTypes.bool,
        toggleOpen:PropTypes.func
    };

    state = {
        updateIndex: 0
    };
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
        // if(this.state.isOpen){
        if(isOpen){
            return(
                <section>
                    {/*{this.article.text}*/}
                    {/*<CommentsList comments = {this.article.comments}/>  */}
                    {article.text}
                    <button onClick = {() => this.setState({updateIndex:this.state.updateIndex + 1})}>update</button>
                    <CommentsList comments = {article.comments} ref = {this.setCommentsRef} key = {this.state.updateIndex}/>
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
export default connect(null,{deleteArticle})(Article)