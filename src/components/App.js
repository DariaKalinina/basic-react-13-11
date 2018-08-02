import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import UserForm from './UserForm'
import DayPickerForm from './DayPickerForm'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

class App extends Component {
	static propTypes = {
        articles: PropTypes.array.isRequired,
	} 
	
    state = {
        selected: null
    }

    handleSelect = selected => this.setState({ selected })

    render() {
        const {articles} = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <h1>App name</h1>
                <UserForm />
				<br/>
				<DayPickerForm /> 
				<br/>
                <Select options = {options} value = {this.state.selected} onChange = {this.handleSelect} multi />
                <ArticleList articles = {articles} defaultOpenId = {articles[0].id}/>
                <ArticlesChart articles = {articles} />
            </div>
        )
    }
}

export default App