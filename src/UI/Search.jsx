import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import React,{ useState } from 'react';


const Search = ({ search ,setInput }) => {
    const searchHandle = (e) =>{
        setInput(e.target.value)
    }
  return (
    <div className='flex w-1/3 gap-2 p-16'>
        <Input onChange={searchHandle}></Input>
        <motion.button onClick={search} className="bg-[var(--Yellow)] p-2 rounded font-bold" whileHover={{scale:1.1}} >Search</motion.button>
    </div>
  )
}

export default Search