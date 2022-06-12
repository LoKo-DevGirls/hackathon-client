import React from 'react'
import { RoundBoxWrapper } from '../RoundBoxWrapper'
import styles from './MoreItemsCard.module.scss'

export const MoreItemsCard = (props) => {
  const { itemList } = props

  return (
    <>
      <RoundBoxWrapper title="Recent Item">
        <ul className={styles.itemCardWrapper}>
          {itemList.map(item => <li key={item.itemId}><img src='' alt={'item'} /></li>)}
        </ul>
      </RoundBoxWrapper>
    </>
  )
}
