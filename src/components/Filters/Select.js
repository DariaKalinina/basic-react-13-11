import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {connect} from "react-redux";

import 'react-select/dist/react-select.css'
import {selectArticle} from "../../AC";

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    handleChange = (e) => {
        const { selectArticle } = this.props;
        let articleId = e[0];
        console.log('---- ', articleId, e.target.value);    // e.target.value returns undefined!
        selectArticle(articleId)
    }

    render() {
        const { articles, selected } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selected}
            onChange={this.handleChange}
            multi
        />
    }
}

const mapStateToProps = (state) => ({
    articles: state.articles,
    selected: state.select
})

export default connect(mapStateToProps, {
    selectArticle
})(SelectFilter)