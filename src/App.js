import {Component} from 'react'
import TabsList from './TabsList'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    image: languageGreetingsList[0].imageUrl,
    imageAlt: languageGreetingsList[0].imageAltText,
  }

  onClickTabItem = id => {
    const a = languageGreetingsList.filter(eachItem => eachItem.id === id)
    console.log(a[0].imageAltText)
    this.setState({image: a[0].imageUrl, imageAlt: a[0].imageAltText})
  }

  render() {
    const {image, imageAlt} = this.state
    console.log(image, imageAlt)
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1 className="heading">Multilingual Greetings</h1>
        <ul
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0px',
          }}
        >
          {languageGreetingsList.map(each => (
            <TabsList
              each={each}
              key={each.id}
              onClickTabItem={this.onClickTabItem}
            />
          ))}
        </ul>
        <div>
          <img src={image} alt={imageAlt} className="image" />
        </div>
      </div>
    )
  }
}

export default App
