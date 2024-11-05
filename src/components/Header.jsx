import React, { Component } from 'react'
import styles from "../styles/components/header.module.scss";

export class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <img src="./logo.png" alt="logo" className={styles.logo}/>
        <h1>RoboQuiz</h1>
      </header>
    )
  }
}

export default Header

