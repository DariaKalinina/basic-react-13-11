import { FILTER_ARTICLE } from '../constants'
import defaultArticles from '../fixtures'

export default (filtredArticle = defaultArticles, action) => {
    const { type } = action

    switch (type) {
		case FILTER_ARTICLE:
			console.log('я тебя отфильтрую!!!')
			return filtredArticle
    }
	
    return filtredArticle
}
