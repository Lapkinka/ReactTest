import React from 'react'
import ChangeWordsLanguage from '../ChangeWordsLanguage'
import Proptypes from 'prop-types'

export default function Loader() {
    return(
        <div>
            <h2>
              <ChangeWordsLanguage word = {'loading'} symbol = {"..."}/>
            </h2>
        </div>
    )
}
// Loader.propTypes = {
// }

