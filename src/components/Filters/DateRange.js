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
        const { chooseDates } = this.props;
        console.log(DateUtils.addDayToRange(day));
        const dates = DateUtils.addDayToRange(day);
        console.log(dates.from);
        chooseDates(dates.from, dates.to)
    };

    render() {
        const { from, to } = this.props;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`;
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