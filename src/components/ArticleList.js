import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import accoShift from "../decorators/accoShift";

export class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.arrayOf(
            PropTypes.object
        )
    }

    // state = {
    //     openArticleId: null
    // }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.openArticleId === this.props.openArticleId) {
    //         nextProps.article.id = null
    //     }
    // }


    render() {
        const { toggleOpenArticle, openArticleId } = this.props

        const articleElements = this.props.articles.map((article, index) => <li key = {article.id}>
            <Article article = {article}
                     isOpen = {openArticleId === article.id}
                     toggleOpenArticle = {toggleOpenArticle}
            />
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
/*

    toggleOpenArticleWitoutCurr(openArticleId) {
        this.setState({ openArticleId })
    }
*/

    // toggleOpenArticle = openArticleId => this.setState({ openArticleId })
}

export default accoShift(ArticleList)