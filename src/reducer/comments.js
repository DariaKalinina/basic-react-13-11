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
			const {user, text} = payload
			commentList[index] = {id: index, user, text}
			console.log('new commentList', commentList)
			const {idArticle} = payload
			articlesCopy[idArticle].comments.push(index)
			console.log('new articlesCopy', articlesCopy)
			return commentList	
    }

    return commentList
}
