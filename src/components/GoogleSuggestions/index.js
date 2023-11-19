// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

const initialSuggestionsList = [
  {id: 1, suggestion: 'Price of Ethereum'},
  {id: 2, suggestion: 'Oculus Quest 2 specs'},
  {id: 3, suggestion: 'Tesla Share Price'},
  {id: 4, suggestion: 'Price of Ethereum today'},
  {id: 5, suggestion: 'Latest trends in AI'},
  {id: 6, suggestion: 'Latest trends in ML'},
]

class GoogleSuggestions extends Component {
  state = {searchInput: '', suggestionsList: initialSuggestionsList}

  onChangeSearchInput = event => {
    const {searchInput, suggestionsList} = this.state
    this.setState({searchInput: event.target.value})
    const filteredList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    this.setState({suggestionsList: filteredList})
  }

  render() {
    const {searchInput, suggestionsList} = this.state
    return (
      <div className="bg-container1">
        <div className="bg-container2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google"
            className="img"
          />
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search"
              className="search-img"
            />
            <input
              type="search"
              placeholder="Search Google"
              onChange={this.onChangeSearchInput}
            />
            <ul className="">
              {suggestionsList.map(each => (
                <SuggestionItem eachItem={each} key={each.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
