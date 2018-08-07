import {INCREMENT, DELETE_ARTICLE, SELECT_ARTICLE, DATE_RANGE} from '../constants'

export function increment() {
    const action = { type: INCREMENT }
    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function selectArticles(idArr) {
    return {
        type: SELECT_ARTICLE,
        payload: { idArr }
    }
}

export function changeDataRange(range) {
    return {
		type: DATE_RANGE,
		payload: { range }
    }
}