import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {ChangeWordsLanguage} from './ChangeWordsLanguage'
import {increment} from '../AC'

class Counter extends Component{
    static propTypes = {
        counter:PropTypes.number,
        increment:PropTypes.func.isRequired
    };
    static contextTypes ={
      choiceLanguage:PropTypes.string
    }
    render(){
        return(
            <div>
                <h2>{this.props.counter}</h2>
                <button onClick={this.handleIncrement}>
                  {ChangeWordsLanguage('increment_me',this.context.choiceLanguage)}
                </button>
            </div>
        )
    }
    handleIncrement = () => this.props.increment()

}

// function mapStateToProps(state) {
//     return{
//         counter:state.count,
//     }
// }
//
// const mapToDispatch = {increment}
//
//
// const decorator = connect(mapStateToProps,mapToDispatch)

// export default decorator(Counter)
export default connect(state => ({counter:state.count}),{increment},null,{pure:false})(Counter)