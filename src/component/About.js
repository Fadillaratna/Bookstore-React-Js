import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="container py-5 my-5">
          <div className="row">
            <div className="col-md-6">
              <h1 class="mb-4">About Us</h1>
              <p className="lead">
                A platform specially prepared to assist you in controlling all financial activities.
                We are here with a clear vision and mission, which is to provide all-in-one services in the field of financial technology in an easy, fast, and transparent way.
                <br/><b>~Improve your financial management</b></p>
              <NavLink to="/contact" className="btn btn-outline-dark px-3">Contact Us</NavLink>
            </div>
            <div className="col-md-6">
              <img src="assets/PP.png" alt="Illus" height="400px" width="600px" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
