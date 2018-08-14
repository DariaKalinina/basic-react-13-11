import { SUBMIT } from '../constants'
import {normalizedComments as defaultComments} from '../fixtures'

const commentsMap = defaultComments.reduce((acc, comment) => ({
    ...acc,
    [comment.id]: comment
}), {})

export default (commentList = commentsMap, action) => {
    const { type, payload, randomId } = action
    switch (type) {
		case SUBMIT:
			const {user, text} = payload
			commentList[randomId] = {id: randomId, user, text}
			return commentList	
    }

    return commentList
}
