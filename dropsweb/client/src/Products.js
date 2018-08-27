import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
  Link
} from 'react-router-dom'

export default class Products extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showCheckboxes: false
    }
  }

  render () {
    let ProdList = []
    let currentCategory = ''

    this.props.allProducts.forEach((dataItem) => {
      let key = `${dataItem.category}${dataItem.name}`
      let image = ``
      // let filterMatch = dataItem.name.indexOf(this.props.searchVal) !== -1

      // if (currentCategory !== dataItem.category) {
        ProdList.push(
          <li className='categoryHeader' key={currentCategory}>
            <Link to="${match.url}/{currentCategory}">
              <img src={dataItem.img} alt={dataItem.description}/>
              <p style={{color: 'green'}}>{dataItem.name}</p>
            </Link>
          </li>)
        currentCategory = dataItem.category
      // }
    })
    return (
        <ul>
          {ProdList}
        </ul>
      )
    }
}

Products.propTypes = {
  searchVal: PropTypes.string,
  allProducts: PropTypes.array
}
