import React,{Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addComment} from '../../AC/index'
import './style.css'

class CommentForm extends Component{
    static PropTypes = {

    };
    state = {
        userName : '',
        comment : '',
    };

    render(){
        return(
            <div>
                Name:<input className={this.getClassName('userName')}
                            value = {this.state.userName}
                            onChange={this.handleChange('userName')}/>
                Comment:<input className={this.getClassName('comment')}
                               value = {this.state.comment}
                               onChange={this.handleChange('comment')}/>
                {/*<button onClick={this.handleAdd} >add Comment</button>*/}
                <button>add Comment</button>
            </div>
        )
    }
    handleAdd = () =>{
        // const {addComment} = this.props
        // addComment({
        //   user:state.userName,
        //   text:state.comment
        // })
    }
    handleChange = type => ev =>{
        const {value} = ev.target;
        if(value.length > constraints[type].max) return;
        this.setState({[type]:value})
    };
    getClassName = type => this.state[type].length && this.state[type].length < constraints[type].min ? "error_input" : '';
}

const constraints = {
    userName:{
        min:5,
        max:15
    },
    comment:{
        min:5,
        max:15
    }
};

// export default CommentForm
export default connect(state => ({}),{addComment})(CommentForm)
