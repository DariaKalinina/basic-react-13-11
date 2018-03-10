import {INCREMENT, DELETE_ARTICLE, SELECT_ARTICLE, CHOOSE_DATES} from '../constants'

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

export function selectArticle(id) {
    return {
        type: SELECT_ARTICLE,
        payload: { id }
    }
}

export function chooseDates(from, to) {
    return {
        type: CHOOSE_DATES,
        payload: {
            from,
            to
        }
    }
}