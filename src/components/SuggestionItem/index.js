// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachItem} = props
  const {suggestion} = eachItem

  return <li>{suggestion}</li>
}

export default SuggestionItem
