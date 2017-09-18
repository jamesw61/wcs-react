
import React from 'react'
import { Link } from 'react-router'


export default React.createClass({
  render() {
    return (

      <div>
      <h1>Results</h1>
      <h2>{this.props.params.round}</h2>
      <h2>{this.props.params.division}</h2>
      <h2>{this.props.params.role}</h2>
      </div>
  )

  }
})