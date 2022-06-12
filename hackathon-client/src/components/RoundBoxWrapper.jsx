import React from 'react'
import styles from './RoundBoxWrapper.module.scss'

export const RoundBoxWrapper = (props) => {
  const { children, title } = props

  return (
    <div className={styles.roundBoxWrapper}>
      <header><h2>{title}</h2></header>
      <div>{children}</div>
    </div>
  )
}
