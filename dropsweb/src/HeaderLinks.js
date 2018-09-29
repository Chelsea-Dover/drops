import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Link } from 'react-router-dom';

export default class HeaderLinks extends Component {
  render () {
    if (this.props.pages === undefined) {
      return null
    }
    const links = this.props.pages.map((item, id) => {
      if (item.title === 'home') {
        return (
          <li key={id}><Link to={`/`}>{item.title}</Link></li>
        )
      }
      return (
        <li key={id}><Link to={item.title}>{item.title}</Link></li>
      )
    })
    return(
      <ul>
        {links}
      </ul>
    )
  }
}

HeaderLinks.propTypes = {
  pages: PropTypes.array
}
