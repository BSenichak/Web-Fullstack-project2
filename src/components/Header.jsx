import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <header>
        <img src="./logo.png" alt="logo" className='logo'/>
        <h1>RoboQuiz</h1>
      </header>
    )
  }
}

export default Header

