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
      <header className="App-header">
        <h1 className={font.title}>
          Blah
        </h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo neque inventore ipsam doloremque pariatur, porro quisquam sint distinctio deleniti itaque provident praesentium repellat molestias dolore nulla optio nisi iure ratione?
      </header>
      <Search data = {data} />
    </div>
  )
}

export default App
