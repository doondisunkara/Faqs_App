import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  render() {
    const {faqDetails, onChangeStatus} = this.props
    const {id, questionText, answerText, checkStatus} = faqDetails
    const imgUrl = checkStatus
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const imgAlt = checkStatus ? 'minus' : 'plus'
    const changeStatus = () => {
      onChangeStatus(id)
    }
    return (
      <l1 className="faq-item-card">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <button type="button" className="check-button" onClick={changeStatus}>
            <img src={imgUrl} alt={imgAlt} className="show-img" />
          </button>
        </div>
        {checkStatus && (
          <div className="answer-container">
            <p className="answer">{answerText}</p>
          </div>
        )}
      </l1>
    )
  }
}

export default FaqItem
