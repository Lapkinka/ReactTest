import React,{Component} from 'react'
import PropTypes from 'prop-types'

class ChoiceLanguage extends Component{
  static PropTypes = {

  };

  render(){
    return(
        <div>
          <button onClick={this.changeLanguage} value={"ru"}>ru</button>
          <button onClick={this.changeLanguage} value={"en"}>en</button>
        </div>
    )
  }
  changeLanguage = (ev) => this.props.onClick(ev.target.value)
}

export default ChoiceLanguage
