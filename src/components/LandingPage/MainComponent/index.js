import React from 'react'
import './style.css';
import Button from '../../Common/Button';
import iphone from '../../../assets/img1.jpg'
// import gradient from '../../../assets/img2.jpg';
import { motion } from 'framer-motion';

function MainComponent() {
  return (
    <div className='landingPage'>
      <div className='leftArea'>
        <motion.h1 className='crypto-heading'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{type:"smooth", duration: 0.5 }}
        >Track Crypto</motion.h1>
        <motion.h1 className='realTime-heading'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{type:"smooth", duration: 0.5 ,delay:0.5}}
        >Real Time</motion.h1>
        <motion.p className='para'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{type:"smooth", duration: 0.5 ,delay:1}}
        >
          Enter a portal adorned with enigmatic glyphs, where the movements of celestial coins are artfully depicted as they traverse the astral plane of the blockchain. Each luminary token, adorned with its celestial name, shines with the brilliance of a supernova, and its luminous trajectory through the cryptoverse is captured with meticulous precision.
        </motion.p>
        <motion.div className='buttons'
        initial={{opacity:0, x:30}}
        animate={{opacity:1,x:0}}
        transition={{type:"smooth",duration:0.5,delay:1.5}}
        >
          <Button text={"DashBoard"} />
          <Button text={"Share"} outlined />
        </motion.div>

      </div>
      <div className='rightArea'>
        <motion.img className='phone' src={iphone} alt='phoneImg'
        initial={{y:-10}}
        animate={{y:10}}
        transition={{
        type:"smooth",
        repeatType:"mirror",
        duration:2,
        repeat:Infinity}} />
        <div className='gradient'></div>
      </div>
    </div>
  )
}

export default MainComponent;