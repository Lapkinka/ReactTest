import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ChangeWordsLanguage} from '../ChangeWordsLanguage'

class NotFound extends Component {
    static defaultProps = {};

    static propTypes = {};

    static contextTypes ={
        choiceLanguage:PropTypes.string
    }

    render() {
        return (
            <div>
                <h1>{ChangeWordsLanguage('not_found',this.context.choiceLanguage)}</h1>
            </div>
        );
    }
}

export default NotFound;
