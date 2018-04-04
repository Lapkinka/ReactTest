import React,{Component} from 'react'
import DayPicker, { DateUtils } from 'react-day-picker';
import {dataRange} from "../../AC";
import {connect} from 'react-redux'
import 'react-day-picker/lib/style.css';
import './DataRangeStyle.css'

class DataRange extends Component {
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
    }
    handleDayClick(day) {
        const{dtRange,dataRange} = this.props;
        dataRange(DateUtils.addDayToRange(day, dtRange))
    }
    handleResetClick() {
        const{dataRange} = this.props;
        dataRange({dtRange:{from:null,to:null}})
    }
    render() {
        const { from, to } = this.props.dtRange;
        const modifiers = { start: from, end: to };
        return (
            <div className="RangeExample">
                <p>
                    {!from && !to && 'Please select the first day.'}
                    {from && !to && 'Please select the last day.'}
                    {from &&
                    to &&
                    `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
                    {from &&
                    to && (
                        <button className="link" onClick={this.handleResetClick}>
                            Reset
                        </button>
                    )}
                </p>
                <DayPicker
                    className="Selectable"
                    selectedDays={[from, { from, to }]}
                    modifiers={modifiers}
                    onDayClick={this.handleDayClick}
                />
            </div>
        );
    }
}

export default connect(state =>({dtRange:state.filters.dataRange}),{dataRange})(DataRange)