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
		console.log('------ click из Filter ', this.props)
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

const mapStateToProps = (state) => ({
	articles: state.articles
})

export default connect(mapStateToProps, { filterArticle })(Filters)

