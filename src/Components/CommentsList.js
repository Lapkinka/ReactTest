import React,{Component} from 'react'
import Comments from './Comments'
import PropTypes from 'prop-types'
import toggleOpen from '../Decorators/toggleOpen'
import CommentForm from "./CommentForm/index";

class CommentsList extends Component{
    static propTypes = {
        comments:PropTypes.array.isRequired
    };
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
    render(){
        const {toggleOpen,isOpen} = this.props;
        return(
            <section>
                <button onClick={toggleOpen}>{isOpen ? "hide comment" : "show comment"}</button>
                {this.getBody()}
            </section>
        )

    }
    getBody () {
        const {comments,isOpen} = this.props;
        if(isOpen){
            if (!comments.length) return(<section>No comments</section>);
            else{
                return(
                    <section>
                        {comments.map(elem => <Comments key = {elem}  id = {elem}/>)}
                        <CommentForm/>
                    </section>
                )
            }
        }
        else return null;
    }
    // toggleOpen = () => {
    //     this.setState({
    //         enable:!this.state.enable
    //     });
    // }
}

export default toggleOpen(CommentsList)