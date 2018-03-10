import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'

import 'react-day-picker/lib/style.css'
import {connect} from "react-redux";
import {chooseDates} from "../../AC";

class DateRange extends Component {
    // state = {
    //     from: null,
    //     to: null
    // };

    handleDayClick = (day) => {
        return null
        // return this.setState(DateUtils.addDayToRange(day, this.state))
    };

    render() {
        const { from, to } = this.state
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    from: state.dateRange.from,
    to: state.dateRange.to
});

export default connect(
    mapStateToProps,
    { chooseDates }
)(DateRange)