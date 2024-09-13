import React from 'react'

const Footer = () => {
    const year =new Date().getFullYear();
    console.log(year) 
  return (
    <div>Albert Liu {year} </div>
  )
}

export default Footer