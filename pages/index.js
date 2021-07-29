import React from 'react';

import Landing from '../components/sections/Landing';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Landing />
    </div>
  )
}
