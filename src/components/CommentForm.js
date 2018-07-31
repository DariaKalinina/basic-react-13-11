import React from 'react'
import PropTypes from 'prop-types'

class CommentForm extends React.Component {
	render() {
		const {name, comment, nameColor, commentColor, handleFocus, handleBlur, handleChange} = this.props
		return (
			<form>
				<label>
					Name: 
					<input 
						type="text" 
						id="name" value={name} 
						style={nameColor} 
						onFocus={handleFocus} 
						onBlur={handleBlur}  
						onChange={handleChange} 
						placeholder="Введите имя"
					/>
				</label>	
				<label>
					Text: 
					<input 
						type="text" 
						id="comment" 
						value={comment} 
						style={commentColor} 
						onFocus={handleFocus} 
						onBlur={handleBlur} 
						onChange={handleChange} 
						placeholder="Введите комментарий"
					/>
				</label>
			</form>
		)
	}
   
}

export default CommentForm