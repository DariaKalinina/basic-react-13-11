import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import Accordion from './common/Accordion'
import {connect} from 'react-redux'

class ArticleList extends Accordion {
    render() {
        const {articles} = this.props
        if (!articles.length) return <h3>No Articles</h3>
        const articleElements = articles.map((article) => <li key={article.id}>
            <Article article={article}
                     isOpen={article.id === this.state.openItemId}
                     toggleOpen={this.toggleOpenItemMemoized(article.id)}
            />
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}


ArticleList.defaultProps = {
    articles: []
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default connect(state => {
	const range = state.filters.dateRange
  	const select = state.filters.selected
	const articles = state.articles
	
	const filteredArticles  = articles.filter(function(article){
		return select.filter(function(id){
			return id == article.id;
		}).length !== 0
	});

	const nextArticleArr = (filteredArticles.length > 0) ? filteredArticles : articles
	let dateFilteredArticles = []
	
	if (range.from !== null && range.to !== null) {
		dateFilteredArticles  = nextArticleArr.filter(function(article){
			return Date.parse(range.from) < Date.parse(article.date) && Date.parse(article.date)< Date.parse(range.to)
		});
	}
	
	return {
		articles: (filteredArticles.length > 0 || dateFilteredArticles.length > 0) 
		? (dateFilteredArticles.length > 0 
			? dateFilteredArticles 
			: filteredArticles) 
		: articles
	}
})(ArticleList)