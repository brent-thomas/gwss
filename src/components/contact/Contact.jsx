import React, {useEffect, useRef} from 'react'
import styles from './contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faFacebook} from '@fortawesome/free-brands-svg-icons'
import emailjs from '@emailjs/browser'
import {Link} from 'react-router-dom'

const Contact = () => {
    const contact_form = useRef()
    const sendEmail = () => {
        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            contact_form.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
          )
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

      useEffect(()=>{
        console.log(process.env)
        console.log('Service ID:', process.env.REACT_APP_EMAILJS_SERVICE_ID);
        console.log('Template ID:', process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
        console.log('Public Key:', process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
      },[])

  return (
    <div className={`pd-hz ${styles.container} `}>
        <div className={styles.text_container}>  
            <h1>Get in touch with any questions</h1>
            <p style={{marginTop:'0.5em', fontWeight:'bold'}}>Sales & Delivery</p>
            <p>BRYAN IRWIN</p>
            <p style={{fontSize:'25px'}}>404-516-8077</p>
            <p style={{marginTop:'0.5em', fontWeight:'bold'}}>Office & Customer Service</p>
            <p>BRANDON IRWIN</p>
            <p style={{fontSize:'25px'}}>678-907-5650</p>
            <p style={{fontSize:'25px', marginTop:'0.5em', marginBottom:'0.5em'}}>irwinfarms@yahoo.com</p>
            <div className={styles.socials}>
                <Link to="https://www.facebook.com/Irwinfarms" target='_blank'>
                    <FontAwesomeIcon icon={faFacebook}/>
                </Link>
                <Link to="https://www.google.com/maps/place/3084+Arena+Rd,+Unadilla,+GA+31091/@32.2459835,-83.7435137,16z/data=!3m1!4b1!4m6!3m5!1s0x88f3d2f57856e2e1:0x6096f2b30e994d68!8m2!3d32.2459791!4d-83.7386428!16s%2Fg%2F11gdkznyvk?entry=ttu" target='_blank'>
                    <FontAwesomeIcon icon={faLocationDot}/>
                </Link>
                <Link to="mailto:irwinfarms@yahoo.com" target='_blank'>
                    <FontAwesomeIcon icon={faEnvelope}/>
                </Link>
                <Link to='tel:+14045168077' target='_blank'>
                    <FontAwesomeIcon icon={faPhone}/>
                </Link>
            </div>
        </div>
        <div className={styles.form_container}>
            <h1>Send us a message: </h1>
            <form className={styles.contact_form} ref={contact_form}>
                <div className={styles.input_flex}>
                    <div>
                        <label>First Name</label>
                        <input type="text" name="fname" />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text" name="lname" />
                    </div>
                </div>

                <div className={styles.input_flex}>
                    <div>
                        <label>Phone</label>
                        <input type="text" name="phone" />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" name="email" />
                    </div>
                </div>
                
                
                
                <label>Message</label>
                <textarea type="text" name="message">

                </textarea>
                <button onClick={()=>{
                    sendEmail()
                }}type='button'>Send</button> 
            </form>
        </div>
      
    </div>
  )
}

export default Contact