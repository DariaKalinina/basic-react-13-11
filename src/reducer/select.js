import { SELECT_ARTICLE } from '../constants'

export default (selectList = [], action) => { 
const { type, payload } = action
    switch (type) {
		case SELECT_ARTICLE:
			console.log('======= SELECT_ARTICLE')
			let selectList = [].concat(...payload)
			
			return selectList
			
	}
	console.log('======= selectList из SELECT_ARTICLE', selectList)
    return selectList
}

