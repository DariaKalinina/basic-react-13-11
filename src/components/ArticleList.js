import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import accordeon from '../decorators/accordeon'
//import Accordeon from '../decorators/accordeon'

class ArticleList extends Component {
	static propTypes = {
		articles: PropTypes.array.isRequired,
		isOpen: PropTypes.bool,
		toggleOpen: PropTypes.func
	}

    render() {
		
		const {openArticleId, isOpenFlag, toggleOpen} = this.props
        const articleElements = this.props.articles.map( (article) => 
			<li key = {article.id}>
				<Article 
					article = {article} 
					isOpen = {openArticleId === article.id} 
					isOpenFlag = {isOpenFlag}
					toggleOpen = {toggleOpen}
					/>
			</li>
		)

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

}

export default accordeon(ArticleList)

// class ArticleList extends Accordeon {
// 	static propTypes = {
// 		articles: PropTypes.array.isRequired,
// 		isOpen: PropTypes.bool,
// 		toggleOpen: PropTypes.func
// 	}

// 	constructor() {
// 		super()
// 	}

//     render() {
		
// 		const openArticleId = this.state.openArticleId
// 		const toggleOpen = this.toggleOpenArticle
//         const articleElements = this.props.articles.map((article) => <li key = {article.id}>
// 			<Article article = {article} isOpen = {openArticleId === article.id} toggleOpen = {toggleOpen}/>
//         </li>)
//         return (
//             <ul>
//                 {articleElements}
//             </ul>
//         )
//     }

// }

// export default ArticleList