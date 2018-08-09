import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitForm } from '../../AC'
import './style.css'

class CommentForm extends Component {
    static propTypes = {
    };

    state = {
        user: '',
        text: ''
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                user: <input value = {this.state.user}
                             onChange = {this.handleChange('user')}
                             className = {this.getClassName('user')} />
                comment: <textarea value = {this.state.text}
                                onChange = {this.handleChange('text')}
                                className = {this.getClassName('text')} />
                <input type = "submit" value = "submit" disabled = {!this.isValidForm()}/>
            </form>
        )
    }

    handleSubmit = ev => {
		const { submitForm, idArticle } = this.props
		ev.preventDefault()
        this.setState({
            user: '',
            text: ''
		})
		submitForm(this.state.user, this.state.text, idArticle)
    }

    isValidForm = () => ['user', 'text'].every(this.isValidField)

    isValidField = type => this.state[type].length >= limits[type].min

    getClassName = type => this.isValidField(type) ? '' : 'form-input__error'

    handleChange = type => ev => {
        const {value} = ev.target
        if (value.length > limits[type].max) return
        this.setState({
            [type]: value
        })
    }
}

const limits = {
    user: {
        min: 1,
        max: 5
    },
    text: {
        min: 1,
        max: 5
    }
}

export default connect(state => ({
    comments: state.comments,
    articles: state.articles
}), { submitForm })(CommentForm)