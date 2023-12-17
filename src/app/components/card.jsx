import React from 'react';
import { color, easeIn, easeInOut, motion, spring } from "framer-motion"
import { useState, useRef, useEffect } from 'react';
import { useInView } from "framer-motion"

function Card({ img, caption, text, number ,Slider, setSlider, index,controler, isMobile}) {

    const card = useRef(null);
    const isInView = useInView(card ,{
        margin: "0px 100px -350px 0px"
      })
    const [isHover, setIsHover] = useState('visible');

    const variants = {
        visible: { opacity: 1, transition: { ease: 'linear', duration: 0.1, delay: 0.3 } },
        hidden: { opacity: 0, transition: { ease: 'linear', duration: 0.1, delay: 0.3 } },
    }

    return (
        <>
            <div style={{ position: 'relative' }} >
                <motion.div  className="red-div" ref={card} onClick={()=>{setSlider(index);const element = document.getElementById('services'); element.scrollIntoView({behavior: 'smooth'})}} onMouseEnter={(e) => { setIsHover('hidden') }} onMouseLeave={(e) => (setIsHover('visible'))} style={{ backgroundColor: 'transparent', zIndex: '10', position: 'relative', pointerEvents: 'all'}}></motion.div>
                <motion.div animate={ isMobile ? {}: { rotateY: isHover == 'hidden' ? 180 : 0,boxShadow: isHover == 'hidden' ? 'rgba(0, 177, 190, 0.25) 0px 9px 22px -3px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px ,rgba(230, 19, 121, 0.25) 2px -2px 22px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px': 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px, rgba(50, 50, 93, 0) 0px 6px 12px -2px, rgba(0, 0, 0, 0) 0px 3px 7px -3px' , backgroundColor: 'rgb(255, 255, 255)' }}  style={{ position: 'absolute', opacity: isInView ? '1' : '0', transition:`1s ease-in-out 0.${number}s opacity`}}
                
                    transition={{
                        ease: easeInOut,
                        duration: 0.8,
                        repeatDelay: 3,
                        backgroundColor: { duration: 0.2, delay: 0.3 },
                        boxShadow: { duration: 0.8 , types:spring}
                    }}

                    className="card" >
                    <motion.img height="30px" width="30px"  loading="lazy" src={img} alt="icon" variants={variants} animate={isMobile ? {} : isHover} /><motion.h2 variants={variants} animate={isMobile ? {}: isHover}>{caption}</motion.h2>
                    <motion.h3 variants={variants} animate={isMobile ? {}: isHover == 'hidden' ? 'visible' : 'hidden'} >{text}</motion.h3>
                </motion.div>
            </div>
        </>
    )
}

export default Card;
