import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Select from "react-select"
import 'react-select/dist/react-select.css';
import './DataRangeStyle.css'

class SelectFilter extends Component{
    static propTypes = {
        articles:PropTypes.array.isRequired
    };
    state = {
        selection : null
    };
    render(){
        const {articles} = this.props;
        const options = articles.map(article => ({
            label:article.title,
            value:article.id
        }));
        return(
            <div>
                <Select options = {options} value = {this.state.selection} onChange = {this.changeSelection} multi/>
            </div>
        )
    }
    changeSelection = selection => this.setState({selection})
}
export default SelectFilter