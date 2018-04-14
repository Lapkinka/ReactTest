import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Select from "react-select"
import 'react-select/dist/react-select.css';
import './DataRangeStyle.css'
import {select} from "../../AC";
import {connect} from 'react-redux'
import { mapToArr } from '../../helpers/helpersJs'

class SelectFilter extends Component{
    static propTypes = {
        articles:PropTypes.array.isRequired
    };
    render(){
        const {articles,selectLabel} = this.props;
        const options = articles.map(article => ({
            label:article.title,
            value:article.id
        }));
        return(
            <div>
                <Select options = {options} value = {selectLabel} onChange = {this.changeSelection} multi/>
            </div>
        )
    }
    changeSelection = selectLabel => {
        const {select} = this.props
        select(selectLabel.map(elem => elem.value))
        // почему только value
    }
}
export default connect(state => ({
    articles:mapToArr(state.articles.entities),
    selectLabel:state.filters.selection
}),{select})(SelectFilter)