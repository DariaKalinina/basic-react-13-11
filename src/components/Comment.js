import React, {Component} from 'react';

export default class Comment extends Component {
	render() {
			const {comment} = this.props;
		
			return (
					<section>
						<h5>{comment.user}</h5>
						<p>{comment.text}</p>
					</section>
			)
	}	
}