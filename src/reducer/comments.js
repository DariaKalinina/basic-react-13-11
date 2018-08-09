import { SUBMIT } from '../constants'
import {normalizedComments as defaultComments} from '../fixtures'
import {normalizedArticles as defaultArticles} from '../fixtures'

const commentsMap = defaultComments.reduce((acc, comment) => ({
    ...acc,
    [comment.id]: comment
}), {})

const articlesMap = defaultArticles.reduce((acc, article) => ({
    ...acc,
    [article.id]: article
}), {})


export default (commentList = commentsMap, action) => {
    const { type, payload, index } = action
    switch (type) {
		case SUBMIT:
			const articlesCopy = {...articlesMap}
			const {user, text, idArticle} = payload
			commentList[index] = {id: index, user, text}
			articlesCopy[idArticle].comments.push(index)
			return commentList	
    }

    return commentList
}
