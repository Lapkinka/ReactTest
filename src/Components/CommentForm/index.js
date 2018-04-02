import React,{Component} from 'react'
import PropTypes from 'prop-types'
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
                <button>add Comment</button>
            </div>
        )
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

export default CommentForm
