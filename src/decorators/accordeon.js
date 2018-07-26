//HOC === Higher Order Component === decorator
import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
	state = {
        openArticleId: null
	}
	toggleOpenArticle = openArticleId => this.setState({ openArticleId })
	
    render() {
		return <OriginalComponent {...this.props}
									{...this.state}
		 							toggleOpen = {this.toggleOpenArticle.bind(this)}/>
    }
}