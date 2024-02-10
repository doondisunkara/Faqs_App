import {Component} from 'react'
import './index.css'

import FaqItem from '../FaqItem'

class Faqs extends Component {
  state = {newList: []}

  componentDidMount() {
    const {faqsList} = this.props
    const updatedList = faqsList.map(each => ({...each, checkStatus: false}))
    this.setState({newList: updatedList})
  }

  onChangeStatus = faqId => {
    const {newList} = this.state
    const filteredList = newList.map(eachFaq => {
      if (eachFaq.id === faqId) {
        return {...eachFaq, checkStatus: !eachFaq.checkStatus}
      }
      return eachFaq
    })
    this.setState({newList: filteredList})
  }

  render() {
    const {newList} = this.state
    // console.log(newList)
    return (
      <div className="app-container">
        <div className="content-container">
          <h1 className="main-heading">FAQS</h1>
          <ul className="faq-list-container">
            {newList.map(eachFaq => (
              <FaqItem
                faqDetails={eachFaq}
                key={eachFaq.id}
                onChangeStatus={this.onChangeStatus}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
