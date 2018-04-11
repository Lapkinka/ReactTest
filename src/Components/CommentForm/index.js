import React,{Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addComment} from '../../AC/index'
import './style.css'

class CommentForm extends Component{
    static PropTypes = {
        id:PropTypes.string.isRequired
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
                <button onClick={this.handleAdd} >add Comment</button>
                {/*<button>add Comment</button>*/}
            </div>
        )
    }
    handleAdd = () =>{
        const {addComment,id} = this.props
        addComment(this.state.userName,this.state.comment,id)
        this.setState({userName:'', comment:''})
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
        max:20
    },
    comment:{
        min:5,
        max:50
    }
};

// export default CommentForm
export default connect(null,{addComment})(CommentForm)
