import React, { useEffect, useState } from 'react'
import styles from './SearchResult.module.scss'
import { HowToRecycle } from '../../components/SearchResult/HowToRecycleCard'
import { ItemSummaryInfo } from '../../components/SearchResult/ItemSummaryInfo'
import { MoreItemsCard } from '../../components/SearchResult/MoreItemsCard'
import { UpcycleVideoCard } from '../../components/SearchResult/UpcycleVideoCard'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const apiUrl = "https://on-the-ground-api.herokuapp.com"
const mockData = {
  councilName: 'Southwark',
  categoryName: 'Glass',
  imagePath: 'https://res.cloudinary.com/dx39zdrw9/image/upload/v1654974652/hackathon/items/water_bottle_wo5pl7.jpg'
}

export const SearchResult = () => {
  const { itemName, councilId } = useParams()
  const [searchResult, setSearchResult] = useState(null)
  const [recentItem, setRecentItem] = useState(null)

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

    const getRecentItem = async () => {
      try {
        const { data } = await axios.get(`${apiUrl}/recentItem`, {
          method: 'GET',
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
        setRecentItem(data)
      } catch (err) {
        console.error(err)
      }
    }

    getSearchedItem()
    getRecentItem()

    return () => {
    }
  }, [])

  
  if (!searchResult || !recentItem) return null;

  return (
    <div className={styles.searchResultPage}>
      <ItemSummaryInfo
        itemName={searchResult.itemName}
        isRecyclable={searchResult.isRecyclable}
        councilName={searchResult.councilName || mockData.councilName}
        categoryName={searchResult.categoryName || mockData.categoryName}
        imagePath={searchResult.itemImage || mockData.imagePath}
      />
      <div className={styles.cardsWrapper}>
        {searchResult.howToRecycle &&<HowToRecycle howToRecycleInfo={searchResult.howToRecycle} />}
        {searchResult.upcycleVideo && <UpcycleVideoCard videoLink={searchResult.upcycleVideo} />}
        <MoreItemsCard itemList={[recentItem]} />
      </div>
    </div>
  )
}
