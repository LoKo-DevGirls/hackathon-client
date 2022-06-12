import React from 'react'
import styles from './MainSelect.module.scss'

export const MainSelect = (props) => {
  const {
    optionList,
    placeHolder
  } = props

  return (
    <select className={styles.mainSelect}>
      <option value="" disabled selected hidden>{placeHolder}</option>
      {optionList.map(option => (
        <option value={option.value} key={option.value}>{option.name}</option>
      ))}
    </select>
  )
}
