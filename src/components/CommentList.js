import React, {Component} from 'react';
import Comment from './Comment';

export default class CommentList extends Component {
	state = {
		isOpen: true
	}

	render() {
		console.log('commentList', this.props.comments.length);

		let commentItem = this.props.comments.map( (comment) => {
			return (<li key = {comment.id}><Comment comment = {comment}/></li>);
			}
		);	

		const body = this.state.isOpen && (
			<section>
				{commentItem}
			</section>);

		return (
				<div>
					<button onClick={this.handleClick}>
						{this.state.isOpen ? 'close comment' : 'open comment'}
					</button>
					{body}
				</div>
		)
	}

	handleClick = () => {
			console.log('---', 'clickedFromComment');
			this.setState({
					isOpen: !this.state.isOpen
			})
		}
	
}