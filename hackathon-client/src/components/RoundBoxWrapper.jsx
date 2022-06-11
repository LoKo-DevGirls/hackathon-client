import React from 'react'

export const RoundBoxWrapper = (props) => {
  const { children, title } = props

  return (
    <div>
      <header>{title}</header>
      <div>{children}</div>
    </div>
  )
}
