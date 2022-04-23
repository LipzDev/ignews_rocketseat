/* eslint-disable @next/next/no-img-element */
import React from 'react'
import SignInButton from '../SignInButton'
import styles from './styles.module.scss'

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="Ignews" />

        <nav>
          <a href="#" className={styles.active}>Home</a>
          <a href="#">Posts</a>
        </nav>

        <SignInButton />

      </div>
    </header>
  )
}

export default Header