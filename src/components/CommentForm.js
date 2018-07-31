import React from 'react'
import PropTypes from 'prop-types'

class CommentForm extends React.Component {
	state = {
		name: '',
		comment: ''	
	}
	
	handleChange = (e) => { 
		console.log(e.target.value, e.target.id)
		const {value, id} = e.target
		this.setState({
			[id]: value.length < 15 ? value : ''
		})	
    }
	
	render() {
		// const {handleChange} = this.props
		return (
			<form>
				<label>
					Name: 
					<input type="text" value={this.state.name} id="name" onChange={this.handleChange} placeholder="Введите имя"/>
				</label>	
				<label>
					Text: 
					<input type="text" value={this.state.comment} id="comment" onChange={this.handleChange} placeholder="Введите комментарий"/>
				</label>
			</form>
		)
	}
   
}

export default CommentForm