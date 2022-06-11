import React from 'react'
import { RoundBoxWrapper } from '../RoundBoxWrapper'

export const UpcycleVideoCard = (props) => {
  const { videoLink } = props

  return (
    <>
      <RoundBoxWrapper title="Upcycle Video">
        {videoLink}
      </RoundBoxWrapper>
    </>
  )
}
