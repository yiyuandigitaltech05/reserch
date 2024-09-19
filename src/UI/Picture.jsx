import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/picture.css"
import { motion } from 'framer-motion';


const Picture = ({ data }) => {
  return (
    <div className='picture pb-4'>
      <p>{data.photographer}</p>
      <a target='_blank' href={data.src.large}>
      <motion.div 
        className='imageContainer bg-cover' 
        whileHover={{scale: 0.9}}
        style={{ backgroundImage: `url(${data.src.large})` }}
      >
      </motion.div>
        </a>
    </div>
  );
};

export default Picture;
