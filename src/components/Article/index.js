import React, {Component, PureComponent} from 'react'
import {connect} from 'react-redux'
import {findDOMNode} from 'react-dom'
import CommentList from '../CommentList'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import './style.css'
import {deleteArticle} from '../../AC'
import {createArticleSelector} from '../../selectors'

class Article extends PureComponent {
    static propTypes = {
		title: PropTypes.string,
		text: PropTypes.string,
		comments: PropTypes.array,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    constructor(props) {
        super(props)

        this.state = {
            error: null,
            counter: 0
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
            isOpen: nextProps.defaultOpen
        })
    }

    componentDidCatch(err) {
        this.setState({
            error: 'can`t display an article'
        })
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
/*

    shouldComponentUpdate(nextProps, nextState) {
        return !Object.keys(nextProps).every(prop => this.props[prop] === nextProps[prop])
    }
*/

    render() {
        console.log('---', 'rendering article')
        if (this.state.error) return <h1>{this.state.error}</h1>

		const {article: {comments, date, id, text, title}, isOpen, toggleOpen} = this.props
        const body = isOpen && (
            <div>
                <button onClick = {this.increment}>increment</button>
                <section>{text}</section>
                <CommentList comments = {comments}
                             key = {this.state.counter}/>
            </div>
        )
        return (
            <div>
                <h2>
                    {title}
                    <button onClick={toggleOpen}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                    <button onClick = {this.handleDelete}>delete me</button>
                </h2>
                <CSSTransition
                    transitionName = 'article'
                    transitionEnterTimeout = {500}
                    transitionLeaveTimeout = {300}
                    transitionAppearTimeout = {500}
                    transitionAppear
                    component = 'div'
                >
                    {body}
                </CSSTransition>
                <h3>creation date: {(new Date(date)).toDateString()}</h3>
            </div>
        )
    }

    handleDelete = () => {
        const {article, deleteArticle} = this.props
        deleteArticle(article.id)
    }
}

const createMapStateToProps = () => {
    const articleSelector = createArticleSelector()

    return (state, ownProps) => ({
        article: articleSelector(state, ownProps)
    })
}


export default connect(createMapStateToProps, {deleteArticle})(Article)