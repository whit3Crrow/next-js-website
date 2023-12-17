import React from 'react'
import './aboutus.scss';
import repair_icon from '../images/tools.webp'
import deal_icon from '../images/acquisition.webp';
import call_icon from '../images/call.webp';
import Card from './card.jsx';
import { useState, useRef, useEffect } from 'react';
import { spring, useInView } from "framer-motion";
import { motion } from "framer-motion";

//TO_DO_LIST
//zrob component card 
//on hover card ma sie obracac pojawić tekst
//na laptopie masz strone z inpiracja dal tekstu nad cardem
//dodaj button na samym dole pod deewizą
//pobierz React Animations bo ten hover słabo działa

function AboutUs(props) {

    const text = useRef(null);
    const isInView = useInView(text);
    const separator = useRef(null);
    const isInViewSep = useInView(separator);
    const button = useRef(null);
    const isInViewBut = useInView(button);


    return (
        <section id='about'>
            <div className="back">
                <div className="container">
                    <div className="cards" onClick={()=>console.log(typeof(setSlider))}>

                        <Card {...props} index={1}   img='/tools.webp' loading='lazy' caption="Naprawy" text="Naprawiamy szybko i skutecznie" number={3} />
                        <Card index={0} {...props}   img='acquisition.webp' loading='lazy' caption="Sprzedaż" text="Sprzedajemy maszyny do mięsa jak i częsci do nich" number={6} />
                        <Card index={2} {...props}   img='call.webp' loading='lazy'caption="Konsultacje" text="Skorzystaj z konsultacji, zadzwoń do nas 579073558" number={9} />

                    </div>

                    <div className="badges" ref={separator}>
                        <div className="square" style={{opacity: isInViewSep ? '1' : '0' , transition: 'ease-in-out 0.3s opacity 1s'}}></div>
                        <div className="square" style={{opacity: isInViewSep ? '1' : '0' , transition: 'ease-in-out 0.3s opacity 1.1s'}}></div>
                        <div className="square" style={{opacity: isInViewSep ? '1' : '0' , transition: 'ease-in-out 0.3s opacity 1.2s'}}></div>
                        <div className="square" style={{opacity: isInViewSep ? '1' : '0' , transition: 'ease-in-out 0.3s opacity 1.3s'}}></div>
                        <div className="square" style={{opacity: isInViewSep ? '1' : '0' , transition: 'ease-in-out 0.3s opacity 1.4s'}}></div>
                        <div className="square" style={{opacity: isInViewSep ? '1' : '0' , transition: 'ease-in-out 0.3s opacity 1.5s'}}></div>
                    </div>
                    <h3 ref={text} style={{opacity: isInView ? '1' : '0', transition: '1s ease-in-out opacity 1.2s'}}>Dewiza naszej firmy, która głosi, że najważniejsza jest wysoka jakość obsługi, stanowi fundament naszej działalności.
                        <br></br> Jesteśmy przekonani, że zadowolenie klienta jest kluczem do sukcesu i dlatego dokładamy wszelkich starań, aby zapewnić usługi na najwyższym poziomie. Zapraszamy do nawiązania współpracy i przekonania się o naszym profesjonaliźmie.</h3>
                    <div className="flex" ref={button} style={{opacity: isInViewBut ? '1' : '0',transition: 'ease-in 0.6s opacity 2s'}}>
                    <motion.div className="button" style={{width: '120px', fontSize:'18px', zIndex: 120}} onClick={(e)=>{const element = document.getElementById('services'); element.scrollIntoView({behavior: 'smooth'})}} >Oferta</motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default aboutus
