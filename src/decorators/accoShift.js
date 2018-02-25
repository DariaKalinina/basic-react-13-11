//HOC === Higher Order Component === decorator
import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
    state = {
        openArticleId: null
    }

    // toggleOpen = () => this.setState({
    //     isOpen: !this.state.isOpen
    // })

    toggleOpenArticle = openArticleId => this.setState({
        openArticleId: openArticleId === this.state.openArticleId ? null : openArticleId
    })

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle}/>
    }
}