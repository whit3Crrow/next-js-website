'use client'
import Image from 'next/image'
import React from 'react'
import Herosection from './components/herosection'
import Aboutus from './components/aboutus'
import Services from './components/services'
import Contact from './components/contact'
import Galery from './components/galery'
import Navbar from './components/navbar'
import { useState, useEffect } from 'react'
import { useAnimation } from "framer-motion";

console.warn = function() {};


export default function Home() {

  let [isMobile, setIsMobile] = useState(false);
  let [Slider, setSlider] = useState(0);
  const controler = useAnimation();

  useEffect(() => {
    window.innerWidth <= 700 ? setIsMobile(true) : null
  }, [])

  return (
    <>
      <Navbar></Navbar>
      <Herosection></Herosection>
      <Aboutus isMobile={isMobile} Slider={Slider} setSlider={setSlider} controler={controler} ></Aboutus>
      <Services isMobile={isMobile} Slider={Slider} setSlider={setSlider} controler={controler}></Services>
      <Galery isMobile={isMobile}></Galery>
      <Contact isMobile={isMobile}></Contact>
    </>
  )
}
