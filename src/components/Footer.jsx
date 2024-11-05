import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <footer>&copy; {new Date().getFullYear()} RoboQuiz</footer>
    )
  }
}

export default Footer