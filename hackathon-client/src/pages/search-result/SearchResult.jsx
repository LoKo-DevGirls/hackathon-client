import React, { useEffect, useState } from 'react'
import styles from './SearchResult.module.scss'
import { HowToRecycle } from '../../components/SearchResult/HowToRecycleCard'
import { ItemSummaryInfo } from '../../components/SearchResult/ItemSummaryInfo'
import { MoreItemsCard } from '../../components/SearchResult/MoreItemsCard'
import { UpcycleVideoCard } from '../../components/SearchResult/UpcycleVideoCard'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const apiUrl = "https://on-the-ground-api.herokuapp.com"

export const SearchResult = () => {
  const { itemName, councilId } = useParams()
  const [searchResult, setSearchResult] = useState(null)

  const councilName = 'Southwark'
  const categoryName = 'Plastic'
  const moreItemList = [{itemId:1}, {itemId:2}, {itemId:3}, {itemId:4}]

  useEffect(() => {

    const getSearchedItem = async () => {
      try {
        const { data } = await axios.get(`${apiUrl}/item`, {
          method: 'GET',
          params: {
            search: itemName,
            councilId,
          },
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })

        const result = data[0]
        setSearchResult(result)

      } catch (err) {
        console.error(err)
      }
    }

    getSearchedItem()

    return () => {
    }
  }, [])
  
  if (!searchResult) return null;

  return (
    <div className={styles.searchResultPage}>
      <ItemSummaryInfo
        itemName={searchResult.itemName}
        isRecyclable={searchResult.isRecyclable}
        councilName={searchResult.councilName}
        categoryName={searchResult.categoryName}
        imagePath={searchResult.itemImage}
      />
      <div className={styles.cardsWrapper}>
        {searchResult.howToRecycle &&<HowToRecycle howToRecycleInfo={searchResult.howToRecycle} />}
        {searchResult.upcycleVideo && <UpcycleVideoCard videoLink={searchResult.upcycleVideo} />}
        <MoreItemsCard itemList={moreItemList} />
      </div>
    </div>
  )
}
