import {CHOOSE_DATES, DELETE_ARTICLE, SELECT_ARTICLE} from '../constants'
import defaultArticles from '../fixtures'

export default (articlesState = defaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.filter(article => article.id !== payload.id)
        case SELECT_ARTICLE:
            return articlesState.filter(article => article.id === payload.id)
        case CHOOSE_DATES:
            return articlesState.filter( (article) => {
                const { date } = article,
                    articleDate = Date.parse(date),
                    from = payload.from !== null ? Date.parse(payload.from) : 0,
                    to = payload.to !== null ? Date.parse(payload.to) : Date.now();
                console.log(articleDate, from, to);
                return articleDate >= from && articleDate <= to;
            })
    }

    return articlesState
}