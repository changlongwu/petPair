import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter, Route, Routes } from "react-router-dom"

import WelcomePage from './routes/WelcomePage.jsx'
import Layout from './routes/Layout.jsx'
// import App from './App.jsx'
import RabbitDisplayPage from './routes/RabbitDisplayPage.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import RabbitDetail from './routes/RabbitDetail.jsx'
import PetSimulationPage from './routes/PetSimulationPage.jsx'
import SimulationInstructionPage from './routes/SimulationInstructionPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/* normal app route */}
    {/* <Routes>
      <Route path='/' element={<WelcomePage/>}/>
      <Route path='/display' element={<Layout/>}>
        <Route index element={<RabbitDisplayPage/>}/>
        <Route path='detail/:id' element={<RabbitDetail/>}/>
        <Route path='simulation/:id' element={<PetSimulationPage/>}/>
        <Route path='simulation-instruction/:id/:name' element={<SimulationInstructionPage/>}/>
      </Route>
    </Routes> */}

    {/* only pet simulation page */}
    <Routes>
      <Route path='/' element={<SimulationInstructionPage/>}/>
      <Route path='/display' element={<Layout/>}>
        <Route index element={<RabbitDisplayPage/>}/>
        <Route path='detail/:id' element={<RabbitDetail/>}/>
        <Route path='simulation/:id' element={<PetSimulationPage/>}/>
        <Route path='simulation-instruction/:id/:name' element={<SimulationInstructionPage/>}/>
      </Route>

    </Routes>
  </BrowserRouter>
)
