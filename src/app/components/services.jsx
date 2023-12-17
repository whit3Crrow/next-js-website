'use client'
import React, { useState, useEffect, useRef } from 'react'
import './services.scss';
import { easeInOut, motion, useInView, useAnimate,  spring, easeIn, useTime } from "framer-motion";

function Services({ Slider, setSlider, controler }) {
  let notSwaping = useRef(true);
  const [scope, animate] = useAnimate();
  const [scope1, animate1] = useAnimate();
  const services = useRef(null);
  let [point_x, set_point_x] = useState(0);
  let [point_y, set_point_y] = useState(0);
  const isInView = useInView(services, {
    margin: "0px 100px -0px 0px",
    triggerOnce: true
  })

  function move_points() {
    let randomNumber1 = null;
    let randomNumber2 = null;
    randomNumber1 = (Math.random() * 60 + 25);
    randomNumber2 = (Math.random() * 60 + 25);
    set_point_x(randomNumber1);
    set_point_y(randomNumber2);
  }

  useEffect(() => {

    move_points();
    

    controler.start({ y: [-1900, 0], transition: { duration: 1.7, type: 'spring' } })
    let interval;
    if (isInView == true) {
      interval = setInterval(() => {

        move_points();

      }, 3000);
    }
    return () => (clearInterval(interval));


  }, [isInView]);

  const Slides = [{ h3: 'Sprzedaż', h4: <><br></br>Szeroki wybór maszyn używanych po kapitalnym remoncie, posiadających gwarancję <br></br><br></br> Części zamienne do maszyn gotowe, oraz wykonujemy części trudno dostępne lub niedostępne na runku <br></br><br></br> Na specjalne życzenie klienta zajmujemy się wyszukiwaniem potrzebnych maszyn zgodnie z złożonym zamówieniem</> },
  { h3: 'Naprawy', h4: <><br></br>Firma PHU „JXXXXX” Ayyyyy Jaxxxxi, zajmuje się naprawą maszyn używanych w przemyśle mięsnym.<br></br><br></br> Wykonujemy naprawy bieżące jak również remonty główne.<br></br> <br></br>nadziewarki, klipsownice, masownice, mieszałki, wilki, kutry, pakowaczki próżniowe, nastrzykiwarki,<br></br> oraz pozostałe maszyny i urządzenia używane w przemyśle mięsnym.<br></br><br></br> Zajmujemy się również remontem pomp próżniowych typu Busch, Ritschel, Becker oraz Tepro</> },
  { h3: 'Konsultacje', h4: <><br></br>Nasi eksperci są dostępni, aby udzielić profesjonalnych konsultacji i doradztwa w zakresie wyboru i eksploatacji maszyn używanych w przemyśle mięsnym. <br></br><br></br> Oferujemy pomoc w optymalizacji procesów produkcyjnych, a także wsparcie techniczne w przypadku awarii i planowanych przeglądów. <br></br><br></br> Zaufaj naszemu doświadczeniu i pozwól, aby Twoja produkcja działała sprawniej dzięki naszej wiedzy i wsparciu.</> }]

  const right = { x: [1900, 0], transition: { duration: 1.4, type: 'spring' } };
  const toRight = { x: [0, 1000], transition: { duration: 0.7, ease: easeInOut } };
  const toLeft = { x: [0, -900], transition: { duration: 0.7, ease: easeInOut } };
  const left = { x: [-900, 0], transition: { duration: 1.4, type: 'spring' } };
  

  function handleSwap(bool) {
    if (notSwaping.current) {
      
      notSwaping.current = false;
      animate(scope.current, {opacity: 0.3} )
    animate(scope1.current, {opacity: 0, transition: {duration: 4}} )
    setTimeout(()=>{
      animate(scope.current, {opacity: 1})
    }, 1700)
    setTimeout(()=>{
      animate(scope1.current, {opacity: 1})
    }, 1700)
    move_points();
      bool ? controler.start(toRight) : controler.start(toLeft)
      setTimeout(() => {
        if (Slides.length - 1 == Slider) {
          bool ? (setSlider(0), controler.start(left)) : (setSlider(Slider - 1), controler.start(right));
        }
        else if (Slider == 0) {
          bool ? (setSlider(1), controler.start(left)) : (setSlider(Slides.length - 1), controler.start(right));
        } else {
          bool ? (setSlider(Slider + 1), controler.start(left)) : (setSlider(Slider - 1), controler.start(right));
        }
        notSwaping.current = true;
      }, 1000)
    }

  }

  return (
    <section id='services'>
      <div className="container">
        <motion.div ref={scope} style={{position:'absolute', width: '100%',height: '100%'}}>
          <motion.div className="point" style={{ background: 'linear-gradient(0deg, rgb(164, 165, 219) 10%, rgb(226, 230, 248) 100%)', position: 'absolute', width: '20px', height: '20px', borderRadius: '100%', top: '30%', zIndex: '1', left: '45%' }} animate={{ scale: Math.random() * 1.5, translateX: point_x * Math.random(), translateY: point_y * Math.random(), transition: { duration: 2.7, type: 'spring' } }}></motion.div>
          <motion.div className="point" style={{ background: 'linear-gradient(0deg, rgb(164, 165, 219) 10%, rgb(226, 230, 248) 100%)', position: 'absolute', width: '20px', height: '20px', borderRadius: '100%', top: '60%', left: '5%', zIndex: '1' }} animate={{ scale: 1 + Math.random() * 1.5, translateX: point_x * Math.random(), translateY: point_y * Math.random(), transition: { duration: 2.7, type: 'spring' } }}></motion.div>
          <motion.div className="point" style={{ background: 'linear-gradient(0deg, rgb(164, 165, 219) 10%, rgb(226, 230, 248) 100%)', position: 'absolute', width: '20px', height: '20px', borderRadius: '100%', top: '37%', left: '15%', zIndex: '1' }} animate={{ scale: Math.random() * 1.5, translateX: point_x * Math.random(), translateY: point_y * Math.random(), transition: { duration: 2.7, type: 'spring' } }}></motion.div>
          <motion.div className="point" style={{ background: 'linear-gradient(0deg, rgb(164, 165, 219) 10%, rgb(226, 230, 248) 100%)', position: 'absolute', width: '20px', height: '20px', borderRadius: '100%', top: '41%', left: '65%', zIndex: '1' }} animate={{ scale: Math.random() * 1.5, translateX: point_x * Math.random(), translateY: point_y * Math.random(), transition: { duration: 2.7, type: 'spring' } }}></motion.div>
          <motion.div className="point" style={{ background: 'linear-gradient(0deg, rgb(164, 165, 219) 10%, rgb(226, 230, 248) 100%)', position: 'absolute', width: '20px', height: '20px', borderRadius: '100%', top: '70%', left: '75%', zIndex: '1' }} animate={{ scale: Math.random() * 1.5, translateX: point_x * Math.random(), translateY: point_y * Math.random(), transition: { duration: 2.7, type: 'spring' } }}></motion.div>
        </motion.div>
        <div className="services_box">

          <div className="content_box" ref={services}>
            <motion.svg  onClick={() => (handleSwap(false))} whileHover={{ scale: 1.05, opacity: 1 }} animate={{ opacity: notSwaping.current ? [1, 0.5, 0.4, 0.5, 1] : [0], scale: [1, 0.9, 0.8, 0.9, 1], transition: { duration: 5, ease: 'linear', repeat: Infinity, repeatDelay: 0.5 } }} xmlns="http://www.w3.org/2000/svg" className="left_arrow" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></motion.svg>
            <div className="content">
              <motion.h3 animate={controler}>{Slides[Slider].h3}</motion.h3>
              <motion.h4 animate={controler}>{Slides[Slider].h4}</motion.h4>
              <motion.div ref={scope1} className="button" style={{width: '110px', fontSize:'18px', marginTop: '60px'}} onClick={(e)=>{const element = document.getElementById('gallery'); element.scrollIntoView({behavior: 'smooth'})}} >Galeria</motion.div>

            </div>
            <motion.svg onClick={() => (handleSwap(true))} whileHover={{ scale: 1.05, opacity: 1 }} animate={{ opacity: notSwaping.current ? [1, 0.5, 0.4, 0.5, 1] : [0], scale: [1, 0.9, 0.7, 0.9, 1], transition: { duration: 5, ease: 'easeIn', repeat: Infinity, repeatDelay: 0.5 } }} xmlns="http://www.w3.org/2000/svg" className="right_arrow" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></motion.svg>
          </div>
          
          
        </div>
      </div>      

    </section>
  )
}

export default Services
