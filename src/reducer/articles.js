import { DELETE_ARTICLE } from '../constants'
import {normalizedArticles as defaultArticles} from '../fixtures'

const articlesMap = defaultArticles.reduce((acc, article) => ({
    ...acc,
    [article.id]: article
}), {})

export default (articles = articlesMap, action) => {
	const { type, payload } = action
    switch (type) {
		case DELETE_ARTICLE:
			const articlesCopy = {...articles}
			delete articlesCopy[payload.id]
			return articlesCopy
    }

    return articles
}