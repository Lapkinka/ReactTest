import React,{Component,PureComponent} from 'react'
import PropTypes from 'prop-types'
import SelectFilter from './Select'
import DataRange from "./DataRange";

class Filters extends Component{
    static propTypes = {
        articles:PropTypes.array.isRequired
    };
    render(){
        const {articles} = this.props;
        return(
            <div>
                <SelectFilter articles={articles}/>
                <DataRange/>
            </div>
        )
    }
}
export default Filters