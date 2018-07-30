import React from 'react';
import Article from './Article';


export default class ArticleList extends React.Component {
    render() {
		let articleItem = this.props.articles.map( (article) => {
			return (
				<li key = {article.id}>
					<Article article = {article}/>
				</li>
			)
		})

		
		return (
			<ul>
				{articleItem}
			</ul>
		)
	}
}
