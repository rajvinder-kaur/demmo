import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home'
import Listing from './pages/Listing'
import Cdash from './pages/Cdash';
import Detail from './pages/Detail.jsx';
import Apply from './pages/Apply.jsx';


function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/list" element={<Listing/>} />
        <Route path="list/detail/:id" element={<Detail/>} />
        <Route path="/Cdashboard" element={<Cdash/>} />
        <Route path="/apply" element={<Apply/>} />
        
    </Routes>
  )
}

export default Router