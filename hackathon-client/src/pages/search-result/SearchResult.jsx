import React from 'react'
import { HowToRecycle } from '../../components/SearchResult/HowToRecycleCard'
import { ItemSummaryInfo } from '../../components/SearchResult/ItemSummaryInfo'
import { MoreItemsSlider } from '../../components/SearchResult/MoreItemsSlider'
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

  const councilName = councilId
  const categoryName = categoryId
  const moreItemList = ['can', 'box', 'bottle']

  return (
    <div>
      <ItemSummaryInfo
        itemName={itemName}
        isRecyclable={isRecyclable}
        councilName={councilName}
        categoryName={categoryName}
        imagePath={itemImage}
      />
      {howToRecycle &&<HowToRecycle howToRecycleInfo={howToRecycle} />}
      {upcycleVideo && <UpcycleVideoCard videoLink={upcycleVideo} />}
      <MoreItemsSlider itemList={moreItemList} />
    </div>
  )
}
