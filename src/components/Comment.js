import React from 'react';

export default class Comment extends React.Component {
	render() {
		const {comment:{user, text}} = this.props;
		
		return (
			<section>
				<h5>{user}</h5>
				<p>{text}</p>
			</section>
		)
	}	
}