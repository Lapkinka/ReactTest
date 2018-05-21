import React, {PureComponent} from 'react';
import ChangeWordsLanguage from '../ChangeWordsLanguage'
import PropTypes from 'prop-types';

class NewArticle extends PureComponent {
    static defaultProps = {};

    static propTypes = {};

    render() {
        return (
            <div>
                <h1><ChangeWordsLanguage word = {'new_article_form'}/></h1>
            </div>
        );
    }
}

export default NewArticle;
