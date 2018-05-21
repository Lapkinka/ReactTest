import React,{Component} from 'react'
import PropTypes from 'prop-types'

class ChangeWordsLanguage extends Component{
  static PropTypes = {
    word:PropTypes.string.isRequired,
    symbol:PropTypes.string
  };
  static contextTypes = {
    languages:PropTypes.object,
    choiceLanguage:PropTypes.string
  }

  render(){
    const {languages,choiceLanguage} = this.context
    const {word,symbol} = this.props
    return <div>{languages[word][choiceLanguage]}{symbol === undefined ? "" : symbol}</div>
  }
}

export default ChangeWordsLanguage
