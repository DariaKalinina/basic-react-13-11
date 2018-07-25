import React, {Component} from 'react';
import Article from './Article';


export default class ArticleList extends Component {
    render() {
			let articleItem = this.props.articles.map( (article) => {
				 return (<li key = {article.id}><Article article = {article}/></li>);
				}
			);

			
			return (
				<ul>
					{articleItem}
				</ul>
			)
		}
}
