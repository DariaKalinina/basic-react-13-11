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
			const article = articles[payload.idArticle] 
			return {...articles, [payload.idArticle]: {
				...article,
				comments: (article.comments || []).concat(randomId)
			}}		
    }

    return articles
}