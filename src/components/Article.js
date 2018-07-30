import React, {PureComponent} from 'react'
import CommentList from './CommentList'
import PropTypes from 'prop-types'

class Article extends PureComponent {
    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            comments: PropTypes.array
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    constructor(props) {
        super(props)

        this.state = {
			error: null,
			isClose: null
        }
	}
		
    componentWillReceiveProps(nextProps) {
		if(nextProps.isOpen ) {
			if(!this.state.isClose) {
				this.setState({
					isClose: nextProps.isOpen
				})
				
			} else if(this.state.isClose) {
				this.setState({
					isClose: !nextProps.isOpen
				})
			}	
		}
			
	}

	//не используется в PureComponent
	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log('nextProps, nextProps', nextProps, nextState);
	// }

    componentDidCatch(err) {
        this.setState({
            error: 'can`t display an article'
        })
    }

    render() {
        console.log('---', 'rendering article')
        if (this.state.error) return <h1>{this.state.error}</h1>

		const {article, isOpen, toggleOpen} = this.props
		
		const button = (
			<button onClick={() => {toggleOpen(article.id)}}>
				{(isOpen && this.state.isClose) ? 'close' : 'open'}
			</button>
		)

        const body = (isOpen && this.state.isClose) && (
            <div>
                <section>{article.text}</section>
                <CommentList comments = {article.comments}/>
            </div>
		)
		
        return (
            <div>
                <h2>
                    {article.title}
					{button}
                </h2>
                {body}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }
}

export default Article