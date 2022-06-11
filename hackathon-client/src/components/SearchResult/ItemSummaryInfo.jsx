import React from 'react'

export const ItemSummaryInfo = (props) => {
  const {
    itemName,
    imagePath,
    isRecyclable,
    councilName,
    categoryName
  } = props

  return (
    <section>
      <img alt='' src={imagePath} />
      <header>
        <div>
          <img src='/public/images/location.svg' alt='' />
          <p>{councilName}</p>
        </div>
        <div>
          <h1>{itemName}</h1>
          {isRecyclable
            ? <img src='/public/images/recyclable-icon.svg' alt='recyclable symbol' />
            : <></>
          }
        </div>
        {categoryName&& <div>
          <p>{categoryName}</p>
        </div>}
      </header>
    </section>
  )
}
