import React, { useState } from 'react'
import { easeIn, easeInOut, motion, useAnimate, AnimatePresence, spring } from 'framer-motion';
import Image from 'next/image'

import './galery.scss';
import klipsownica from '../images/klipsownica/20120301208.avif';
import klipsownica1 from '../images/klipsownica/20120301209.avif';
import klipsownica2 from '../images/klipsownica/20120301210.avif';
import klipsownica3 from '../images/klipsownica/20120301211.avif';
import czeesc_klipsownica from '../images/czesci_do_klipsownic/20130215223.avif';
import czeesc_klipsownica1 from '../images/czesci_do_klipsownic/20130215224.avif';
import czeesc_klipsownica2 from '../images/czesci_do_klipsownic/20130215225.avif';
import czeesc_klipsownica3 from '../images/czesci_do_klipsownic/20130215226.avif';
import czeesc_klipsownica4 from '../images/czesci_do_klipsownic/20130215227.avif';
import nadziewara from '../images/nadziewarka_risco_rs_1040/20120807062.avif';
import nadziewara1 from '../images/nadziewarka_risco_rs_1040/20120807063.avif';
import nadziewara2 from '../images/nadziewarka_risco_rs_1040/20120807064.avif';
import nadziewara3 from '../images/nadziewarka_risco_rs_1040/20120807065.avif';
import nadziewara4 from '../images/nadziewarka_risco_rs_1040/20120807066.avif';
import nadziewara5 from '../images/nadziewarka_risco_rs_1040/20120807067.avif';
import nadziewara6 from '../images/nadziewarka_risco_rs_1040/20120807068.avif';
import nadziewara7 from '../images/nadziewarka_risco_rs_1040/20120807069.avif';
import nadziewara_inna from '../images/nadziewarka_risco_rs_4000_65/20120918101.avif';
import nadziewara_inna2 from '../images/nadziewarka_risco_rs_4000_65/20121001112.avif';
import nadziewara_inna1 from '../images/nadziewarka_risco_rs_4000_65/20121001111.avif';
import nadziewara_inna3 from '../images/nadziewarka_risco_rs_4000_65/20121001113.avif';
import piła_tasmowa from '../images/pila_tasmowa/20120328223.avif';
import piła_tasmowa1 from '../images/pila_tasmowa/20120328225.avif';
import Wil_bizerba from '../images/wilk_bizerba/20120604021.avif';
import Wil_bizerba1 from '../images/wilk_bizerba/20120604022.avif';
///


function Galery(isMobile) {
  const [indexGalery, setIndexGalery] = useState(0);
  const galerys = [{
    caption: 'Klipsownica', img: '/klipsownica/20120301209.avif', galery: [{
      alt: "Image1's alt text",
      caption: "Image1's description",
      src: klipsownica,
    },
    {
      alt: "Image2's alt text",
      caption: "Image2's description",
      src: klipsownica1,
    },
    {
      alt: "Image1's alt text",
      caption: "Image1's description",
      src: klipsownica2,
    },
    {
      alt: "Image2's alt text",
      caption: "Image2's description",
      src: klipsownica3,
    }
    ]
  },
  {
    caption: 'Części do klipsownic ', img: '/czesci_do_klipsownic/20130215223.avif', galery: [{
      alt: "Image1's alt text",
      caption: "Image1's description",
      src: czeesc_klipsownica,
    },
    {
      alt: "Image2's alt text",
      caption: "Image2's description",
      src: czeesc_klipsownica1,
    },
    {
      alt: "Image2's alt text",
      caption: "Image2's description",
      src: czeesc_klipsownica3,
    },
    {
      alt: "Image2's alt text",
      caption: "Image2's description",
      src: czeesc_klipsownica4,
    }
    ]
  },
  {
    caption: 'Nadziewarka RISCO RS 1040', img: '/nadziewarka_risco_rs_1040/20120807063.avif', galery: [
      {
        alt: "Image1's alt text",
        caption: "Image1's description",
        src: nadziewara,
      },
      {
        alt: "Image1's alt text",
        caption: "Image1's description",
        src: nadziewara1,
      },
      {
        alt: "Image1's alt text",
        caption: "Image1's description",
        src: nadziewara2,
      }, {
        alt: "Image1's alt text",
        caption: "Image1's description",
        src: nadziewara3,
      }, {
        alt: "Image1's alt text",
        caption: "Image1's description",
        src: nadziewara4,
      },{
        alt: "Image1's alt text",
        caption: "Image1's description",
        src: nadziewara5,
      },{
        alt: "Image1's alt text",
        caption: "Image1's description",
        src: nadziewara6,
      },{
        alt: "Image1's alt text",
        caption: "Image1's description",
        src: nadziewara7,
      },
    ]
  },
  {
    caption: 'Nadziewarka RISCO RS 4000 65', img: '/nadziewarka_risco_rs_4000_65/20120918101.avif', galery: [{
      alt: "Image1's alt text",
      caption: "Image1's description",
      src: nadziewara_inna,
    },
    {
      alt: "Image1's alt text",
      caption: "Image1's description",
      src: nadziewara_inna1,
    },{
      alt: "Image1's alt text",
      caption: "Image1's description",
      src: nadziewara_inna2,
    },{
      alt: "Image1's alt text",
      caption: "Image1's description",
      src: nadziewara_inna3,
    },
    ]
  },
  {
    caption: 'Piła taśmowa', img: '/pila_tasmowa/20120328223.avif', galery: [{
      alt: "Image1's alt text",
      caption: "Image1's description",
      src: piła_tasmowa,
    },
    {
      alt: "Image1's alt text",
      caption: "Image1's description",
      src: piła_tasmowa1,
    }
    ]
  },
  {
    caption: 'Wilk Bizerba', img: '/wilk_bizerba/20120604022.avif', galery: [{
      alt: "Image1's alt text",
      caption: "Image1's description",
      src: Wil_bizerba,
    },
    {
      alt: "Image1's alt text",
      caption: "Image1's description",
      src: Wil_bizerba1,
    },
    ]
  }]

  const [extendDrawer, setExtendDrawer] = useState(false);
  const [delay, setDelay] = useState(true);
  const [showPicture, setShowPicture] = useState([false,null]);

  function ShowPicture(src){
    setShowPicture([true,src]);
  }

  return (
    <section id='gallery'>

      <motion.div transition={{
        staggerChildren: 0.4, // Każde dziecko zacznie swoją animację z opóźnieniem o 0.2s
      }}
        className="container">

        {galerys.map((galery, index) => {
          return (
            <React.Fragment key={index}>
              <div className="grid-item" onClick={(e) => { setExtendDrawer(true);}}>
                <motion.div onClick={(e) => {  setIndexGalery(index); }} whileHover={{
                  scale: 1.05
                }} animate={isMobile ? {}:{ y: [5, 0, 5], transition: { y: { duration: 5, type: easeInOut, repeat: Infinity } } }} className="cir" style={{ backgroundImage: `url('${galery.img}')`, zIndex: 4, loading: 'lazy' }}>
                </motion.div>
                <h4 style={{ zIndex: 4 }}>{galery.caption}</h4>
                <motion.div  style={{ width: '60px', fontSize: '18px', padding: '0', marginTop: '5px' }} onClick={(e) => { setIndexGalery(index); }} >→</motion.div>

              </div>
            </React.Fragment>)
        })}


      </motion.div>
      <div className="overlay"></div>
      <div className="overlay1"></div>
      <motion.div className="drawer" animate={isMobile ? {width: extendDrawer ? '100vw' : '0'}:{width: extendDrawer ? '100vw' : '0', transition: {duration: extendDrawer ? '1.5' : '0.4', type: extendDrawer ? 'spring' : 'easeIn'}}}>
        {extendDrawer ?
          <>
            <motion.div animate={isMobile ? {}:{ opacity: [0, 1], transition: { duration: 0.5, delay: 2 } }} className="div" style={{ fontSize: '35px', cursor: 'pointer', zIndex: '110' }} onClick={(e) => { setExtendDrawer(false),setDelay(true) }}>✖</motion.div>
            <div className="text_box" style={{ cursor: 'pointer', width: '80vw', justifyContent: 'left', display: 'flex', marginBottom: '40px' }}>
              <motion.h3 className='breadcrumb' style={{   padding: '0.75rem 1rem', borderRadius: '0.25rem', boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' }} animate={isMobile ? {}:{ opacity: [0, 1], transition: { duration: 0.5, delay: 2 } }}>
                {
                  galerys.map((galery, index) => {
                    return (<React.Fragment key={index}><span onClick={() => {setIndexGalery(index),setDelay(false)}} style={{ textDecoration: indexGalery == index ? 'underline' : 'none', color: indexGalery == index ? 'black' : 'blue', textUnderlineOffset: '8px', textDecorationThickness: '1px' ,  padding: '5px'  }}>{galery.caption}</span> / </React.Fragment>)
                  })
                }
              </motion.h3>
            </div>
            <motion.div id='galery'  key={indexGalery} exit={{opacity: 0, duration: 2, type: easeIn}}  animate={isMobile ? {}:{ opacity: [0, 1], transition: { duration: 0.8, delay: delay ? 0.9 : 0} }} style={{ width: '80vw', height: '70vh', boxShadow:'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}}>
                {galerys[indexGalery].galery.map((pic, index)=>{
                  return(<Image loading='lazy'  key={index} onClick={()=>(ShowPicture(pic.src))}className='pic' src={pic.src} alt={pic.alt}/>)
                })}
            
            </motion.div>
            {showPicture[0] ? <motion.div animate={isMobile ? {}:{ opacity: [0, 1], transition: { duration: 0.3} }}  style={{position: 'absolute', top:'0px', width: '100%', height: '100%', background: 'rgba(0, 0, 3, 0.95)', zIndex: '130'}}><Image loading='lazy' className='full_pic' style={{display:'block',position: 'absolute', top:'50%', left:'50%'}} src={showPicture[1]}></Image><motion.div animate={isMobile ? {}:{ opacity: [0, 1], transition: { duration: 0.5} }}  style={{ position: 'absolute', top: '30px', left: '25px',fontSize: '35px', cursor: 'pointer', zIndex: '150' ,color:'white',textShadow:'2px 1px 1px  black'}} onClick={(e) => { setShowPicture([false,null]) }}>✖</motion.div></motion.div> : null}
          </>
          : null}
      </motion.div>
      <div className="overlay2"></div>
      <div className="overlay3"></div>
    </section>
  )
}


export default Galery

