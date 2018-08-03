import { FILTER_ARTICLE } from '../constants'

export default (filtredArticle = [], action) => {
    const { type } = action

    switch (type) {
		case FILTER_ARTICLE:
			console.log('======= FILTER_ARTICLE')
			filtredArticle.push('1')

			return filtredArticle
    }
	console.log('======= filtredArticle из FILTER_ARTICLE', filtredArticle)
    return filtredArticle
}
