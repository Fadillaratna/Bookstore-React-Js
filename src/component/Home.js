import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
            <p className="card-text">Hi, we are mFinT.
            <br></br>Improve your financial management,
            <br></br>Easy way to help control your financial
            <br></br>You can reach financial goals.</p><br></br><br></br>

        <img src="https://images.unsplash.com/photo-1556741533-974f8e62a92d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="card-img"></img>
    </div>
    )
  }
}
