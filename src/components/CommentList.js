import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import ValidateForm from './ValidateForm'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    render() {
        const {isOpen, toggleOpen} = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        console.log('---', 123, this.props.isOpen)
        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {comments, isOpen} = this.props
		if (!isOpen) return null
		
        const body = comments.length ? (
            <ul>
                {comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)}
            </ul>
        ) : <h3>No comments yet</h3>

        return (
            <div>
				{body}
				<ValidateForm name={{min: 10, max: 100}} comment={{min: 20, max: 100}}/>
            </div>
        )
	}
	
	
}


export default toggleOpen(CommentList)