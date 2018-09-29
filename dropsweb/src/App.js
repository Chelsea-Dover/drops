import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HeaderLinks from './HeaderLinks'
import SeparatePages from './SeparatePages'

const SERVER_ROOT = 'https://drops-f0c8d.firebaseio.com/'

/* global fetch */

class App extends Component {
  constructor (props) {
      super(props)
      this.state = {
        pages: []
      }
  }
  componentWillMount () {
    fetch(`${SERVER_ROOT}/pages.json`)
    .then(response => {
      return response.json()
    })
    .then(text => {
      const newPages = this.state.pages.map((item) => Object.assign({}, item) )
      Object.keys(text).forEach(x => {
        newPages.push({title: x, sections: text[x].sections})
      })
      this.setState({
        pages: newPages
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }
  render() {
    const SinglePage = ({match}) => {
      if (match === undefined) {
        return null
      }
      if (match.params.title === undefined) {
        return (
          <SeparatePages
            url={"home"}
            page={this.state.pages}
          />
        )
      }
      return (
        <SeparatePages
          url={match.params.title}
          page={this.state.pages}
        />
      )
    }
    return (
      <Router>
        <div>
          <nav>
            <HeaderLinks
              pages={this.state.pages}
            />
          </nav>
          <Route exact path='/' component={SinglePage}/>
          <Route path='/:title' component={SinglePage}/>
        </div>
      </Router>
    );
  }
}

export default App;
