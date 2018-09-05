import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import Accordion from './common/Accordion'
import {connect} from 'react-redux'
import {filtratedArticlesSelector} from '../selectors'

class ArticleList extends Accordion {
    render() {
        console.log('---', 2)
		const {articles} = this.props
        if (!articles) return <h3>No Articles</h3>
		let articleElements = []
		for (let article in articles) {
			articleElements.push(<li key={article}>
				<Article id={article}
						 isOpen={article === this.state.openItemId}
						 toggleOpen={this.toggleOpenItemMemoized(article)}
				/>
			</li>)
		}
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}


ArticleList.defaultProps = {
    articles: {}
}

ArticleList.propTypes = {
    articles: PropTypes.object.isRequired
}

export default connect(state => {
    console.log('---', 0)
    return {
        articles: filtratedArticlesSelector(state)
    }
})(ArticleList)