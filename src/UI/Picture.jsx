import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/picture.css"
import { motion } from 'framer-motion';


const Picture = ({ data }) => {
  return (
    <div className='picture pb-4'>
      <p>{data.photographer}</p>
      <motion.div 
        className='imageContainer' 
        whileHover={{scale: 0.9}}
        style={{ backgroundImage: `url(${data.src.large})` }}
      >
      </motion.div>
      <p>Download pic: <a target='_blank' href={data.src.large}>down</a></p>
    </div>
  );
};

export default Picture;
