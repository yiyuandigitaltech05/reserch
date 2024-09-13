import React from 'react'
import { Link , Outlet  } from 'react-router-dom'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Footer from './footer/Footer'


const Layout = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Homepage</Link> 
                </li>
                <li>
                    <Link to="/about">About</Link> 
                </li>
            </ul>
        </nav>
        <Outlet/>
        <Footer/>
    </div>
    
   
  )
}

export default Layout