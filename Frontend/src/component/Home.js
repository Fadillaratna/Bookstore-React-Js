import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div className="container"> <br/><br/><br/><br/>
      <div className="row">
          <div className="col-6">
              <h4 className="d-flex justify-content-between align-items-center mt-3">
                  <h5 className="display-6 fw-bolder mt-5">WHAT BOOK ARE YOU <br/>LOOKING FOR?</h5>
              </h4>
              <h6 className='fs-5 fw-light mb-3 mt-3'>Not sure what to read next? <br></br>Explore our catalog for books with our platform<br></br>Get your new book collection!</h6>
              <NavLink to="/gallery" className="btn btn-dark mt-3" id="blue">Explore<i className="fa fa-arrow-right ms-2"></i></NavLink>
          </div>
          <div className="col-6">
              <img src='/assets/illus.png' id="illus"></img>
          </div>
      </div>
  </div>
    )
  }
}
