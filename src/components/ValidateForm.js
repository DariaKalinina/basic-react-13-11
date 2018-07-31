import React from 'react'
import CommentForm from './CommentForm'

class ValidateForm extends React.Component {
	state = {
		name: '',
		nameMin: 10,
		nameColor: {},
		comment: '',
		commentMin: 20,
		commentColor: {},
		maxLength: 100
	}
	
	handleChange = (e) => { 
		const {value, id} = e.target
		this.setState({
			[id]: value
		})	
	}
	
	handleBlur = (e) => {
		let length = e.target.value.length
		const idColor = e.target.id + 'Color'
		const minLength = (e.target.id == 'name') ? this.state.nameMin : this.state.commentMin
		const maxLength = this.state.maxLength
		const border = { borderColor: 'red' }
		if ((length < minLength) || (length > maxLength)) {
			this.setState({
				[idColor]: border
			})	
		}
	}

	handleFocus = (e) => {
		const idColor = e.target.id + 'Color'
		const border = { borderColor: 'rgb(238, 238, 238)' }
		this.setState({
			[idColor]: border
		})
	}
	
	render() {
		return <CommentForm {...this.state} handleFocus={this.handleFocus} handleBlur={this.handleBlur} handleChange={this.handleChange}/>
	}
   
}

export default ValidateForm