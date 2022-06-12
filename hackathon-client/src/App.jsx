import { useState, useEffect } from 'react'
import './App.scss'
import font from './style/fonts.module.scss'
import { Search } from './components/Search/Search'
import { dummyData } from './dummyData'


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
      lorem ipsum
    </div>
  )
}

export default App
