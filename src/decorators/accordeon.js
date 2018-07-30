//HOC === Higher Order Component === decorator
import React, {Component} from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
	state = {
		openArticleId: null
	}

	toggleOpenArticle = (openArticleId) => this.setState({ 
		openArticleId
	})
	
    render() {
		return <OriginalComponent {...this.props}
									{...this.state}
		 							toggleOpen = {this.toggleOpenArticle}/>
    }
}

// export default class Accordeon extends React.Component {
// 	constructor() {
// 		super()
// 		this.state = {
// 			openArticleId: null
// 		}
// 		this.toggleOpen = this.toggleOpenArticle.bind(this)
// 	}
	
// 	toggleOpenArticle = openArticleId => this.setState({ openArticleId })
	
// }