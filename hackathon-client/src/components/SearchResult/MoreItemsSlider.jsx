import React from 'react'
import { RoundBoxWrapper } from '../RoundBoxWrapper'

export const MoreItemsSlider = (props) => {
  const { itemList } = props

  return (
    <>
      <RoundBoxWrapper title="More items">
        <ul>
          {itemList.map(item => <img src='' alt={'item'} key={item}/>)}
        </ul>
      </RoundBoxWrapper>
    </>
  )
}
