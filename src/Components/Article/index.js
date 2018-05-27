import React,{Component,PureComponent} from 'react'
import PropTypes from 'prop-types'
import {findDOMNode} from 'react-dom'
import CommentsList from '../CommentsList'
import {connect} from 'react-redux'
import {deleteArticle,loadArt} from '../../AC'
import {ChangeWordsLanguage} from '../ChangeWordsLanguage'
import Loader from '../Loader/loader'
import toggleOpen from '../../Decorators/toggleOpen'
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
    static contextTypes ={
        choiceLanguage:PropTypes.string
    }

    state = {
        updateIndex: 0
    };
    // componentWillMount(){
    //   this.props.loadArt(this.props.id)
    // }
    // componentWillReceiveProps({id,loadArt}){
    //   loadArt(id)
    // }

    // componentWillReceiveProps(nextProps){
    //     // if(isOpen) loadArt(article.id)
    //     // if(!this.props.isOpen && isOpen && !article.text && !article.loading) loadArt(article.id)
    //     // if(isOpen && !article.text && !article.loading) loadArt(article.id)
    //   console.log(nextProps.isOpen,"isOpen")
    //   console.log(nextProps.loadArt,"loadArt")
    //   console.log(nextProps.article,"article")
    //   // console.log(nextProps.article.text,"article text")
    //   // console.log(nextProps.article.loading,"articleloading")
    //   console.log(this.props.id,"id")
    //   console.log(this.props.article,"article")
    //   // console.log(article === undefined,"article")
    //   // console.log(article.text,"article.text")
    //   // console.log(article.loading,"article.loading")
    //   // console.log(this.props.article,"this.article")
    //   // console.log(this.props.article === undefined,"this.article")
    //   // console.log(this.props.id,"id")
    //   if(nextProps.article === undefined || (nextProps.article.loading && !nextProps.article.text)) {
    //       console.log("zawelll")
    //       console.log("nextProps.article",nextProps.article)
    //       console.log("nextProps.article.loading",nextProps.article.loading)
    //       loadArt(this.props.id)
    //   }
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
        const {choiceLanguage} = this.context;
        // console.warn(this.context,"this.context article")
        // console.warn(toggleOpen,"toggleOpen")
        if(!article) return null
        return(
          <section>
            <h3>{article.title}</h3>
            <button onClick={this.toggleOpen}>{isOpen ? ChangeWordsLanguage('close',choiceLanguage)
              : ChangeWordsLanguage('open',choiceLanguage)}
            </button>
            <button onClick={this.handleDelete}>
              {ChangeWordsLanguage('delete',choiceLanguage)}
            </button>
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
        const {choiceLanguage} = this.context;
        console.warn("isOpen",isOpen)
        if(article.loading) return <Loader choiceLanguage = {choiceLanguage}/>
        else if(isOpen){
            return(
                <section>
                    {/*{this.article.text}*/}
                    {/*<CommentsList comments = {this.article.comments}/>  */}
                    {article.text}
                    <button onClick = {() => this.setState({updateIndex:this.state.updateIndex + 1})}>
                      {ChangeWordsLanguage('update',choiceLanguage)}
                    </button>
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
    //     console.log("this.props.isOpen",this.props.isOpen)
    //     this.setState({isOpen:!this.props.isOpen});
    //     console.log("this.props.isOpen",this.props.isOpen)
    // }
}

// export default toggleOpen(Article)
// export default Article
export default connect((state,ownProps) => ({article:state.articles.entities.get(ownProps.id)})
  ,{deleteArticle,loadArt},
  null,
  {pure:false})(Article)