import React, {PureComponent} from 'react';
import {ChangeWordsLanguage} from '../ChangeWordsLanguage'
import PropTypes from 'prop-types';

class NewArticle extends PureComponent {
    static defaultProps = {};

    static propTypes = {};

    static contextTypes ={
        choiceLanguage:PropTypes.string
    }

    render() {
        return (
            <div>
                <h1>{ChangeWordsLanguage('new_article_form',this.state.choiceLanguage)}</h1>
            </div>
        );
    }
}

export default NewArticle;
