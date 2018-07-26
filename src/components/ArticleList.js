import React, {Component} from 'react'
import Article from './Article'
import accordeon from '../decorators/accordeon'

 class ArticleList extends Component {
    render() {
		
		const {openArticleId, toggleOpen} = this.props
        const articleElements = this.props.articles.map((article, index) => <li key = {article.id}>
			<Article article = {article} isOpen = {openArticleId === article.id} toggleOpen = {toggleOpen}/>
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

}

export default accordeon(ArticleList)