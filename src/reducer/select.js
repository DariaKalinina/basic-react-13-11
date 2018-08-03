import { SELECT_ARTICLE } from '../constants'

export default (selectList = [], action) => {
    const { type, payload } = action

    switch (type) {
		case SELECT_ARTICLE:
			selectList = [].concat(...payload)
			return selectList
    }
	
    return selectList
}

