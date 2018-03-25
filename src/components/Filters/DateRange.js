import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'

import 'react-day-picker/lib/style.css'
import {connect} from "react-redux";
import {chooseDates} from "../../AC";

class DateRange extends Component {

    handleDayClick = (day) => {
        const { chooseDates, range } = this.props;
        chooseDates(DateUtils.addDayToRange(day, range));
    };

    render() {
        const { from, to } = this.props.range;
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
    range: state.filters.dateRange
});

export default connect(
    mapStateToProps,
    { chooseDates }
)(DateRange)