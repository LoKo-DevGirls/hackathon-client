import { useState, useEffect } from 'react'
import './App.css'
import { Search } from './components/Search/Search'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const loadData = async () => {
        try {
            const response = await fetch("url", {
                headers: { "Content-Type": "application/json" },
                method: "GET"
            });
            console.log(response.data)
            setData(response.data)
        } catch (err) {
            console.error(err);
    }}
    loadData();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Search searchData = {data} />
    </div>
  )
}

export default App
