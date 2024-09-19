import React from 'react'
import { Link , Outlet  } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Footer from './footer/Footer'
import { ModeToggle } from './UI/ModeToggle'
import { motion } from 'framer-motion'

const Layout = () => {
  return (
    <div>
        <nav className='max-w-[1280px] mx-auto py-16' >
            <ul className='flex gap-4 justify-start'>
                <li>
                    <Link to="/" className='font-bold'>Homepage</Link> 
                </li>
                <motion.li className='ml-auto'>
                    <ModeToggle/>
                </motion.li>
            </ul>
        </nav>
        <Outlet/>
        <Footer/>
    </div>
    
   
  )
}

export default Layout