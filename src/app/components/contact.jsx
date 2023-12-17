import React, {useRef, useState} from 'react'
import './contact.scss';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner';
import Logo2 from '../images/Logo2.png';


  


function contact() {
  const form = useRef();
  const [isSend, setIsSend] = useState(false);
    
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_a1y2ttu', 'template_z3k6d0q', form.current, 'y2MSuiz6rkaUXThk3')
      .then((result) => {
          console.log(result.text);
          toast.success("Wiadomość dotarła do właściela");
          setIsSend(true);
      }, (error) => {
          console.log(error.text);
          toast.error("Wiadomość nie dotarła do właściela")
      })
    
    

  };

  
  
  return (
    
    <section id='contact'>
      <Toaster  richColors />
      <div className="container">

        <footer >
          <div className="get-in-touch">
            <p className="title" style={{ color: 'black', fontWeight: '600' }}>Wyslij Wiadomosc!</p>
            <form className="contact-form row" ref={form} onSubmit={sendEmail}>

              <div className="form-field col x-50" >
                <input  autoComplete='true' id="email" name="email" className="input-text js-input" type="email" required />
                <label className="label " htmlFor="email">E-mail</label>
              </div>
              <div className="form-field col x-25">
                <input autoComplete='true' id="name" name="from_name" className="input-text js-input" type="text" required />
                <label className="label" htmlFor="name">Imie / Firma</label>
              </div>
              <div className="form-field col x-100">
                <input  autoComplete='true' id="message"  name="message" className="input-text js-input" type="text" required />
                <label className="label" htmlFor="message">Wiadmość</label>
              </div>
              <div className="form-field col x-100 align-center">
                <input className="submit-btn" onClick={ isSend ? (()=>toast.error("już wysłałeś jedną wiadomość")) : null} value="Submit" type={ isSend ? 'button' : 'submit'}/>
              </div>
            </form>
          </div>
        </footer>
        <div className="footer">
          <div className="footer_box"  >
            <div className="fcard">
              <p>Adres</p>
              ul. Nxxxx xxx/x,
              xx-xxx Dzxxxxxx, Poxxxx
            </div>
            <div className="fcard" style={{padding: '0px', height: '325px'}}><iframe title="mapa dojazdowa" style={{border: '0px', borderRadius: '10px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.9036399115785!2d16.629068576863897!3d50.74027606645309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470e49f8e69fbd7f%3A0x3d31b8a3e68b0141!2sNowowiejska%20102%2F5%2C%2058-200%20Dzier%C5%BConi%C3%B3w!5e0!3m2!1spl!2spl!4v1700345528249!5m2!1spl!2spl" loading="lazy" width="auto" height="100%"    referrerPolicy="no-referrer-when-downgrade"></iframe></div>
            <div className="fcard">
              <p>Kontakt</p>
              Komórka: 6xx 92 xx 35<br></br>
              E-mail: bxxro@xxtxxxxwis.pl</div>
          </div>
          </div>
        </div>

    </section>
  )
}

export default contact
