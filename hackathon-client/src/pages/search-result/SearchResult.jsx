import React from 'react'
import styles from './SearchResult.module.scss'
import { HowToRecycle } from '../../components/SearchResult/HowToRecycleCard'
import { ItemSummaryInfo } from '../../components/SearchResult/ItemSummaryInfo'
import { MoreItemsCard } from '../../components/SearchResult/MoreItemsCard'
import { UpcycleVideoCard } from '../../components/SearchResult/UpcycleVideoCard'

const dummyItem = {
  itemId: "bbb",
  itemName: "Water Bottle",
  itemImage: "https://londonrecycles.co.uk/wp-content/uploads/2020/08/Plastic-bottle.jpg",
  isRecyclable: true,
  howToRecycle:
    "1. Empty bottle of residual contents.\n2. Keep the label and cap on.\n3. Put it into a recycling bin",
  upcycleVideo: "",
  councilId: 1,
  categoryId: 1,
  status: "approved"
}

export const SearchResult = () => {
  const {
    itemId,
    itemName,
    itemImage,
    isRecyclable,
    howToRecycle,
    upcycleVideo,
    councilId,
    categoryId
  } = dummyItem

  const councilName = 'Southwark'
  const categoryName = 'Plastic'
  const moreItemList = [{itemId:1}, {itemId:2}, {itemId:3}, {itemId:4}]

  return (
    <div className={styles.searchResultPage}>
      <ItemSummaryInfo
        itemName={itemName}
        isRecyclable={isRecyclable}
        councilName={councilName}
        categoryName={categoryName}
        imagePath={itemImage}
      />
      <div className={styles.cardsWrapper}>
        {howToRecycle &&<HowToRecycle howToRecycleInfo={howToRecycle} />}
        {upcycleVideo && <UpcycleVideoCard videoLink={upcycleVideo} />}
        <MoreItemsCard itemList={moreItemList} />
      </div>
    </div>
  )
}
