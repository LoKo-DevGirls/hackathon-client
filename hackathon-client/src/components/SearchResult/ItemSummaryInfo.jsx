import React from 'react'
import styles from './ItemSummaryInfo.module.scss'
import { Link } from 'react-router-dom'

export const ItemSummaryInfo = (props) => {
  const {
    itemName,
    imagePath,
    isRecyclable,
    councilName,
    categoryName
  } = props

  return (
    <section className={styles.itemSummaryInfo}>
      <div>
        <Link to={'/'}>
          <button className={styles.backButton}><img src='/src/assets/Icons/arrow_back.svg' alt='back button'/></button>
        </Link>
        <img className={styles.itemImage} src={imagePath} alt={itemName} />
      </div>
      <header>
        <div className={styles.locationWrapper} >
          <img className={styles.locationIcon} src='/public/images/location.svg' alt='' />
          <p>{councilName}</p>
        </div>
        <div className={styles.itemNameWrapper}>
          <h1>{itemName}</h1>
          {isRecyclable
            ? <img className={styles.recycleIcon} src='/public/images/recyclable-icon.svg' alt='recyclable symbol' />
            : <></>
          }
        </div>
        {categoryName&& <button className={styles.categoryName}>
          <p>{categoryName}</p>
        </button>}
      </header>
    </section>
  )
}
