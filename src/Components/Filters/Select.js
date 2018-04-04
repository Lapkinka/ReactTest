import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Select from "react-select"
import 'react-select/dist/react-select.css';
import './DataRangeStyle.css'
import {select} from "../../AC";
import {connect} from 'react-redux'

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
        // console.log(this.props,"selectPROPS")
        // select(this.state.selection)
        return(
            <div>
                <Select options = {options} value = {this.state.selection} onChange = {this.changeSelection} multi/>
            </div>
        )
    }
    changeSelection = selection => {
        const {select} = this.props;
        this.setState({selection})
        select(selection)
        // console.log("selection",selection)
    }
}
export default connect(state => ({
    articles:state.articles}),{select})(SelectFilter)