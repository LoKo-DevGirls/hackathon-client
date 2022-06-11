import React from 'react'
import { RoundBoxWrapper } from '../RoundBoxWrapper'

export const HowToRecycle = (props) => {
  const { howToRecycleInfo } = props

  return (
    <>
      <RoundBoxWrapper title="How To Recycle" >
        {howToRecycleInfo}
      </RoundBoxWrapper>
    </>
  )
}
