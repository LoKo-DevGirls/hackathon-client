import { useState, useEffect } from 'react'
import './App.css'
import { Search } from './components/Search/Search'
import { dummyData } from './dummyData'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const loadData = () => {
        // try {
        //     const response = await fetch("url", {
        //         headers: { "Content-Type": "application/json" },
        //         method: "GET"
        //     });
        //     console.log(response.data)
        //     setData(response.data)
        // } catch (err) {
        //     console.error(err);
        setData(dummyData); //TODO: remove it once connect to server;
    }
    loadData();
    console.log(data);
  }, []) //TODO: Not yet implemented.

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Search searchData = {data} />
    </div>
  )
}

export default App
