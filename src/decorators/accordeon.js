//HOC === Higher Order Component === decorator
import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
	state = {
		openArticleId: null,
		isOpenFlag: null
	}

	toggleOpenArticle = (openArticleId) => {
		console.log('openArticleId, this.state.isOpenFlag', openArticleId, this.state.isOpenFlag)
		if (this.state.isOpenFlag === null) {
			this.state.isOpenFlag = openArticleId	
		} else {
			this.state.isOpenFlag = ((this.state.isOpenFlag == this.state.openArticleId) 
			? false : this.state.openArticleId)
		}
		
		console.log('this.state.isOpenFlag', this.state.isOpenFlag)
		this.setState({ 
			openArticleId,
			isOpenFlag: this.state.isOpenFlag
		})
	}	
	S
    render() {
		return (
			<OriginalComponent 
				{...this.props}
				{...this.state}
		 		toggleOpen = {this.toggleOpenArticle}
			 />
		)	 
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