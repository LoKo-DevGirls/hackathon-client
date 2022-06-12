import { useState, useEffect } from 'react'
import './App.scss'
import font from './style/fonts.module.scss'
import { Search } from './components/Search/Search'
import { dummyData } from './dummyData'
import { Link } from 'react-router-dom'

function App() {
  const [data, setData] = useState(dummyData)

 // useEffect(() => {
    //const loadData = () => {
        // try {
        //     const response = await fetch("url", {
        //         headers: { "Content-Type": "application/json" },
        //         method: "GET"
        //     });
        //     console.log(response.data)
        //     setData(response.data)
        // } catch (err) {
        //     console.error(err);
    //}
    //loadData();
 // }, []) //TODO: Not yet implemented.

  return (
    <div className="App">
      <header className="App-header">
        <img src='/src/assets/Logos/Logo-01.png' alt='on the ground main logo'/>
        <h1 className={font.title}>
          On The Ground
        </h1>
      </header>
      <Search data = {data} />
      <Link to="/search-result/1">Add New Item</Link>
    </div>
  )
}

export default App
