import React, {Component} from 'react';
import CommentList from './CommentList';

export default class Article extends Component {
    state = {
        isOpen: true
    }

    render() {
        const {article} = this.props;
				const body = this.state.isOpen && <section>{article.text}</section>;
				const comment = article.comments && <div><CommentList comments = {article.comments}/></div>;
        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={this.handleClick}>
                        {this.state.isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                {body}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
								{comment}
            </div>
        )
    }

    handleClick = () => {
        console.log('---', 'clickedFromArticle');
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

