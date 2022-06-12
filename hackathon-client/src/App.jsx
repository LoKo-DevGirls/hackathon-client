import { useState, useEffect } from 'react'
import './App.scss'
import { Search } from './components/Search/Search'
import font from './style/fonts.module.scss'


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
    <div className="App">
      <Search data = {items}/>
    </div>
  )
}

export default App
