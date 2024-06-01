import React, { Component } from 'react'

export default class GlassOn extends Component {
  render() {
    return (
      <div className='GlassOnModal'>
        <img style={{width: 150}} src={this.props.urlGO} alt="" />
      </div>
    )
  }
}
