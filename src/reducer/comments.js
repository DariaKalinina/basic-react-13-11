import { SUBMIT } from '../constants'
import {normalizedComments as defaultComments} from '../fixtures'

const commentsMap = defaultComments.reduce((acc, comment) => ({
    ...acc,
    [comment.id]: comment
}), {})


export default (commentList = commentsMap, action) => {
	console.log(action)
    const { type, payload, index } = action
    switch (type) {
		case SUBMIT:
			const {user, text} = payload
			console.log(action)
			commentList[index] = {id: index, user, text}
			return commentList
    }

    return commentList
}