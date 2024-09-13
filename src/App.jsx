import { useState } from 'react'
import './App.css'
import { Button } from "@/components/ui/button"
import { Routes,Route,useLocation } from "react-router-dom"
import Layout from './Layout'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Page404 from './pages/Page404'


function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Homepage/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='*' element={<Page404/>}></Route>
      </Route>
    </Routes>
    
    {/* <Button >Button</Button> */}

    </>
  )
}

export default App
