import { useState, useEffect } from 'react'
import './App.scss'
import font from './style/fonts.module.scss'
import styles from './style/mainPage.module.scss'
import { Search } from './components/Search/Search'
import { dummyData } from './dummyData'
import { Link } from 'react-router-dom'


function App() {
  const [items, setItems] = useState([])
  const [councils, setCouncils] = useState([])

 useEffect(() => {
    const loadItems = async () => {
        try {
            const response = await fetch("https://on-the-ground-api.herokuapp.com/allitem", {
                headers: { "Content-Type": "application/json" },
                method: "GET"
            });
            const data = await response.json()
            console.log(data);
            setItems(data);
        } catch (err) {
            console.error(err);
    }}
    const loadCouncils = async () => {
      try {
          const response = await fetch("https://on-the-ground-api.herokuapp.com/councils", {
              headers: { "Content-Type": "application/json" },
              method: "GET"
          });
          const data = await response.json()
          console.log(data);
          setCouncils(data);
      } catch (err) {
          console.error(err);
  }}
    loadItems();
    loadCouncils();
 }, []) 
 
  return (
    <div className={['App', styles.mainPage].join(' ')}>
      <header className="App-header">
        <img src='/src/assets/Logos/Logo-02.png' alt='on the ground main logo'/>
        <h1 className={font.title}>
          ON THE GROUND
        </h1>
      </header>
      <Search data = {items} />
      <Link to="/add-item"><button className={styles.addItemButton}><img src='/src/assets/Icons/plus.svg'/><span>Add New Item</span></button></Link>
    </div>
  )
}

export default App
