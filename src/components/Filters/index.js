import React, { Component } from 'react'
import DateRange from './DateRange'
import SelectFilter from './Select'
import {connect} from 'react-redux'
import {filterArticle} from '../../AC'


class Filters extends Component {
    static propTypes = {
	};
	
	handleClick = () => {
		const {filterArticle} = this.props
        filterArticle()
    }

    render() {
        return (
            <div>
                <SelectFilter />
                <DateRange />
				<button onClick={this.handleClick}> FILTER ARTICLE </button>
            </div>
        )
    }
}

export default connect(null, { filterArticle })(Filters)

