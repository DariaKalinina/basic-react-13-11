import { SELECT_ARTICLE } from '../constants'
import defaultArticles from '../fixtures'

export default (articlesState = defaultArticles, action) => { 
const { type, payload } = action
    switch (type) {
		case SELECT_ARTICLE:
			let selectList = [].concat(...payload)
			
			console.log('======= articlesState', articlesState)
			return articlesState.filter(article => article.id != selectList[selectList.length-1])
			
    }
	
    return articlesState
}

