import React,{Component} from 'react'
import {ChangeWordsLanguage} from './ChangeWordsLanguage'
import PropTypes from 'prop-types'

class UserForm extends Component{
    static PropTypes = {
    };
    static contextTypes ={
      choiceLanguage:PropTypes.string
    }
    render(){
        return(
            <div>
              {ChangeWordsLanguage('name',this.context.choiceLanguage)}:
              <input type = 'text' value = {this.props.userName} onChange={this.handleUserChange}/>
            </div>
        )
    }
    handleUserChange = (ev) =>{
      this.props.onChange(ev.target.value)
    }

}

export default UserForm
