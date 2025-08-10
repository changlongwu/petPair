import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"

import WelcomePage from './routes/WelcomePage.jsx'
import Layout from './routes/Layout.jsx'
// import App from './App.jsx'
import RabbitDisplayPage from './routes/RabbitDisplayPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<WelcomePage/>}/>
      <Route path='/display' element={<Layout/>}>
        <Route index element={<RabbitDisplayPage/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
)
