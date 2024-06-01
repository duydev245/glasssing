import React, { Component } from 'react'
import GlassOn from './GlassOn'

export default class Modal extends Component {
  render() {
    
    let { url } = this.props;

    return (
      <div className='mt-5' style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="modal-image" style={{ maxWidth: "300px", textAlign: "center" }}>
          <img style={{ maxWidth: "100%", height: "auto" }} src="./glassesImage/model.jpg" alt="" />
          <GlassOn urlGO = {url} />
        </div>
      </div>
    )
  }
}

