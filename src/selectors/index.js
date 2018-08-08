import {createSelector} from 'reselect'

export const articlesSelector = state => state.articles
export const filtersSelector = state => state.filters
export const commentListSelector = state => state.comments
export const idSelector = (_, props) => props.id

export const filtratedArticlesSelector = createSelector(articlesSelector, filtersSelector, (articles, filters) => {
    console.log('---', 1)
	const {selected, dateRange: {from, to}} = filters
	let articlesCopy = {...articles}
	let articleId = Object.keys(articles)
	let idDelete = null
	articleId.forEach(id => {
		const published = Date.parse(articles[id].date)
		
		if(selected.length && selected.includes(id)) {
			idDelete = id
		}
		if(from && to && (published > from && published < to)) {
			idDelete = id
		}
		delete articlesCopy[idDelete]
	})
	
	return articlesCopy
	
	
	// return articles.filter(article => {
    //     const published = Date.parse(article.date)
    //     return (!selected.length || selected.includes(article.id)) &&
    //         (!from || !to || (published > from && published < to))
    // })
})

export const createCommentSelector = () => createSelector(commentListSelector, idSelector, (comments, id) => {
    return comments[id]
})

export const createArticleSelector = () => createSelector(articlesSelector, idSelector, (article, id) => {
    return article[id]
})