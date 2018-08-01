import React from 'react'
import CommentForm from './CommentForm'

class ValidateForm extends React.Component {
	state = {
		name: '',
		nameColor: {},
		comment: '',
		commentColor: {},
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
		const { min: elemMin, max: elemMax } = (e.target.id == "name") ? this.props.name : this.props.comment
		if ((length < elemMin) || (length > elemMax)) {
			this.setState({
				[idColor]: { borderColor: 'red' }
			})	
		}
	}

	handleFocus = (e) => {
		const idColor = e.target.id + 'Color'
		this.setState({
			[idColor]: { borderColor: 'rgb(238, 238, 238)' }
		})
	}
	
	render() {
		return <CommentForm {...this.state} handleFocus={this.handleFocus} handleBlur={this.handleBlur} handleChange={this.handleChange}/>
	}
   
}

export default ValidateForm