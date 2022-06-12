import { useState, useEffect } from 'react'
import './App.scss'
import font from './style/fonts.module.scss'
import styles from './style/mainPage.module.scss'
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
    <div className={['App', styles.mainPage].join(' ')}>
      <header className="App-header">
        <img src='/src/assets/Logos/Logo-02.png' alt='on the ground main logo'/>
        <h1 className={font.title}>
          ON THE GROUND
        </h1>
      </header>
      <Search data = {data} />
      <Link to="/add-item"><button className={styles.addItemButton}><img src='/src/assets/Icons/plus.svg'/><span>Add New Item</span></button></Link>
    </div>
  )
}

export default App
