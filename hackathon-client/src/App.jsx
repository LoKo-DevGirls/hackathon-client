import { useState, useEffect } from 'react'
import './App.css'
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
      <header className="App-header">
      </header>
      <Search data = {data} />
    </div>
  )
}

export default App
