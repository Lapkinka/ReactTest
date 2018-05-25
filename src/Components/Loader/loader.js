import React, {Component} from 'react'
import {ChangeWordsLanguage} from '../ChangeWordsLanguage'
import PropTypes from 'prop-types';

// export default function Loader() {
//     static ContextTypes ={
//       choiceLanguage:PropTypes.string
//     }
//     return(
//         <div>
//             <h2>
//               {ChangeWordsLanguage('loading',this.context.choiceLanguage)}...
//             </h2>
//         </div>
//     )
// }

class Loader extends Component {
  static PropTypes = {
    choiceLanguage: PropTypes.string
  }
  render(){
    return(
      <div>
        <h2>
          {ChangeWordsLanguage('loading', this.props.choiceLanguage)}...
        </h2>
      </div>
    )
  }


}

export default Loader
// Loader.propTypes = {
// }

