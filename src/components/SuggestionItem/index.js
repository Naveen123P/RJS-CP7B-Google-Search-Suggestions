// Write your code here
// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachItem, arrowFunction} = props
  const {id, suggestion} = eachItem

  const toArrow = () => {
    arrowFunction(id)
  }

  return (
    <li>
      <p>{suggestion}</p>
      <button type="button" onClick={toArrow} className="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow-img"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
