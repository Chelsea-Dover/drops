import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SeparatePages extends Component {
  render () {
    let pageContent = []
    let eachSec = []
    const currentPage = this.props.page.find(p => p.title === this.props.url)
    if (currentPage !== undefined) {
      currentPage.sections.forEach((sec) => {
        if (sec !== null) {
          sec.text.forEach((x) => {
            eachSec.push(<p>{x}</p>)
          })
          pageContent.push(<div><h1>{sec.header}</h1><div>{eachSec}</div></div>)
        }
      })
    }
    return(
      <div>{pageContent}</div>
    )
  }
}

SeparatePages.propTypes = {
  url: PropTypes.string,
  page: PropTypes.array
}
