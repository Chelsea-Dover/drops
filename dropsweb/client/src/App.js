import React, { Component } from 'react';
import './App.css';
import Products from './Products';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const DATA =  [
    { name: 'adorable cat mug', description: 'Cute 15oz mug with cat picture', img: 'https://i.imgur.com/4x2kTvk.jpg', categories: ["mugs", "kitchen", "dishware"], price: 19.99, stocked: true},
    { name: 'cute fat cat t-shirt', description: 'scoop neck w/ cat art', img: 'https://i.imgur.com/sVtJ9L3.jpg', categories: ["shirts", "apperal", "t-shirts", "unisex"], price: 25.99, stocked: true},
    { name: 'cat dress', description: 'dress with cute little cat doodles', img: 'https://i.imgur.com/EHBVYfj.jpg', categories: ["apperal", "dresses", "womans"], price: 40.99, stocked: true},
    { name: 'cat pencil', description: 'pencil with cute cat tip', img: 'https://i.imgur.com/RATSFIr.jpg', categories: ["stationary", "art supplies"], price: 15.00, stocked: true}
  ]

export function roundUp (num) {
  let roundNum = parseFloat(num.toFixed(2))
  if (roundNum < 0.99) {
    roundNum = 0.00
  }
  return roundNum
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchEl: '',
      onlyInStock: false,
      total: 0,
      inCart: {},
      selectable: false
    }
    this.addTotal = this.addTotal.bind(this)
  }

  addTotal (event) {
      let newTotal
      let isChecked = event.target.checked
      let price

      DATA.forEach((dataItem) => {
        if (dataItem.id === parseInt(event.target.id, 10)) {
          price = dataItem.price
        }
      })

      if (isChecked) {
        newTotal = roundUp(this.state.total += price)
      } else {
        newTotal = roundUp(this.state.total -= price)
      }
      this.setState({total: newTotal})
    }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Merp!</h1>
          </header>
          <Products
            searchVal = {this.state.searchEl}
            allProducts = {DATA}
          />
        </div>
      </Router>
    );
  }
}

export default App;
