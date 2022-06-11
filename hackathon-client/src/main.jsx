import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { SearchResult } from './pages/search-result/SearchResult'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <App /> } />
            <Route  
                path='/search-result/:itemId'
                element={ <SearchResult /> }
            />
        </Routes>
    </BrowserRouter>
)
