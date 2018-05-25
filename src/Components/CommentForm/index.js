import React,{Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addComment} from '../../AC/index'
import './style.css'
import {ChangeWordsLanguage} from '../ChangeWordsLanguage'
import { lengthValue,wrongInInput } from '../../helpers/helpersJs'

class CommentForm extends Component{
    static PropTypes = {
        id:PropTypes.string.isRequired
    };
    static contextTypes ={
        choiceLanguage:PropTypes.string
    }
    state = {
        userName : '',
        comment : '',
    };

    render(){
        return(
            <div>
              {ChangeWordsLanguage('name',this.context.choiceLanguage)}:
              <input className={this.getClassName('userName')}
                     value = {this.state.userName}
                     onChange={this.handleChange('userName')}/>
              {ChangeWordsLanguage('comment',this.context.choiceLanguage)}:
              <input className={this.getClassName('comment')}
                     value = {this.state.comment}
                     onChange={this.handleChange('comment')}/>
              <button className={this.statusButton()} onClick={this.handleAdd}>
                {ChangeWordsLanguage('add_comment',this.context.choiceLanguage)}
              </button>
                {/*<button>add Comment</button>*/}
            </div>
        )
    }
    handleAdd = () =>{
        const {addComment,id} = this.props
        addComment(this.state.userName,this.state.comment,id)
        this.setState({userName:'', comment:''})
    }
    statusButton = () => lengthValue(this.state) ? '' : "disabled"
    handleChange = type => ev =>{
        const {value} = ev.target;
        if(value.length > constraints[type].max) return;
        this.setState({[type]:value})
    };
    getClassName = type => wrongInInput(this.state,type) ? "error_input" : '';
}

const constraints = {
    userName:{
        min:5,
        max:20
    },
    comment:{
        min:5,
        max:100
    }
};

// export default CommentForm
export default connect(null,{addComment},null,{pure:false})(CommentForm)
