'use client'
import React, { useState, useEffect, useRef } from 'react';
import logo from '../images/logocircle.webp';
import Image from 'next/image'
import './navbar.scss';

function navbar({setIsMobile}) {
    useEffect(() => {

        window.innerWidth <= 700 ? setIsMobile(true) : null
      }, [])

    const nav = useRef();
    const extendNav = (bool) => {
        if (bool) {
            nav.current.classList.remove("extended");

        } else {
            nav.current.classList.toggle("extended");
        }
    }


    return (
        <>
            <div ref={nav} className="nav">
                <div className="background-pattern"></div>
                <div className="close" onClick={() => extendNav(false)}>
                    <span></span><span></span></div>
                <div className="logo" width="35" height="35" >
                    <Image
                        src={logo}
                        alt="Next.js Logo"
                        width={50}
                        height={50}
                        priority
                    />
                    <h1>Jxxxxx</h1>
                </div>
                <div className="links">
                    <a className='link' href='#about' onClick={(e) => { extendNav(true); }}>O nas</a>
                    <a className='link' href='#services' onClick={(e) => { extendNav(true); }}>Oferta</a>
                    <a className='link' href='#gallery' onClick={(e) => { extendNav(true); }}>Galeria</a>
                    <a className='button' href='#contact' onClick={(e) => { extendNav(true); }}>Kontakt</a>
                </div>
                <div className='burger show' onClick={() => extendNav(false)}>
                    <span></span><span></span><span></span>
                </div>
            </div>
        </>
    )
}

export default navbar
