import React from 'react'
import styles from './contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudMeatball } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
import {Link} from 'react-router-dom'
const Contact = () => {
  return (
    <div className={`pd-hz ${styles.container} `}>
        <div className={styles.text_container}>  
            <h1>Get in touch with any questions</h1>
            <p style={{marginTop:'2em'}}>Address</p>
            <p style={{fontSize:'25px'}}>3084 Arena Rd</p>
            <p style={{fontSize:'25px'}}>Unadilla, GA 31091</p>
            <p style={{marginTop:'2em'}}>Contact</p>
            <p style={{fontSize:'25px'}}>404-516-8077</p>
            <p style={{fontSize:'25px'}}>678-907-5650</p>
            <p style={{fontSize:'25px'}}>irwinfarms@yahoo.com</p>
            <div className={styles.socials}>
                <Link to="https://www.facebook.com/Irwinfarms" target='_blank'>
                    <FontAwesomeIcon icon={faFacebook}/>
                </Link>
            </div>
        </div>
        <div className={styles.form_container}>
            <form className={styles.contact_form}>
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
                <button type='button'>Send</button> 
            </form>
        </div>
      
    </div>
  )
}

export default Contact