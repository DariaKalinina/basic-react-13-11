import { DELETE_ARTICLE, SUBMIT } from '../constants'
import {normalizedArticles as defaultArticles} from '../fixtures'

const articlesMap = defaultArticles.reduce((acc, article) => ({
    ...acc,
    [article.id]: article
}), {})

export default (articles = articlesMap, action) => {
	const { type, payload, randomId } = action
	
    switch (type) {
		case DELETE_ARTICLE:
			const articlesCopy = {...articles}
			delete articlesCopy[payload.id]
			return articlesCopy	
		case SUBMIT:
			const {idArticle} = payload
			const articlesCopy2 = {...articlesMap}
			articlesCopy2[idArticle].comments.push(randomId)
			return articlesCopy2		
    }

    return articles
}