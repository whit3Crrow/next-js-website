import Image from 'next/image'


import React from 'react';
import meatbeater from '../images/maszyna3.webp';
import triangle from '../images/traingle.webp';

import './herosection.scss';

function herosection() {
    return (
        <>

            <div className="background">
            <video src="/bgvideo.mp4" className='bg' muted autoPlay loop alt="background video" loading='lazy'/>
                <div className="container">
                    <div className="text_box">
                        <h1>
                            PHU JATECH SERWIS
                        </h1>
                        <h2>Firma PHU JXXXXX – Adam Bensari powstała w 20xx roku a od 17 lat aktywnie działa w branży przemysłu mięsnego na rynku krajowym oferując szeroką gamę maszyn oraz utrzymania ich w ruchu</h2>
                        <div className="button" onClick={(e)=>{const element = document.getElementById('about'); element.scrollIntoView({behavior: 'smooth'})}}>O Nas</div>
                    </div>
                    <div className="heroimg">
                        <Image src={meatbeater} width={311} height={400} alt="meat machine photo" />
                        <Image loading="lazy" width="466" height="400" src={triangle} alt="visual triangle effect" className='triangle' />
                        <Image loading="lazy" width="466" height="400" src={triangle} alt="visual triangle effect" className='triangle' />
                        <Image loading="lazy" width="466" height="400" src={triangle} alt="visual triangle effect" className='triangle' />

                    </div>
                </div>
                <div className="separator">

                </div>
            </div>
          
        </>

    )
}

export default herosection
