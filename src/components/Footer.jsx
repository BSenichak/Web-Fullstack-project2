import React, { Component } from 'react'
import styles from "../styles/components/footer.module.scss";

export class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>&copy; {new Date().getFullYear()} RoboQuiz</footer>
    )
  }
}

export default Footer