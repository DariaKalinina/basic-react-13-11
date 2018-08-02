import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {connect} from 'react-redux'
import {selectArticles} from '../../AC'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
		selected: null
    }

    handleChange = selected => {
		const {selectArticles} = this.props
		this.setState({ selected })
		// костыль обыкновенный: не могу придумать, как отдавать id последней выбранной статьи
		selectArticles(selected[selected.length-1].value)
	}

    render() {
		const { articles } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={this.state.selected}
			onChange={this.handleChange}
			multi
        />
    }
}

const mapStateToProps = (state) => ({
	articles: state.articles
})

export default connect(mapStateToProps, { selectArticles })(SelectFilter)