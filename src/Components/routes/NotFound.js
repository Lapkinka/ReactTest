import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class NotFound extends PureComponent {
    static defaultProps = {};

    static propTypes = {};

    render() {
        return (
            <div>
                <h1><ChangeWordsLanguage word = {'not_found'}/></h1>
            </div>
        );
    }
}

export default NotFound;
