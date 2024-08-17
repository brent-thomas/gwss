import React, {useEffect, useRef, useState} from 'react'
import styles from './contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faFacebook} from '@fortawesome/free-brands-svg-icons'
import emailjs from '@emailjs/browser'
import {Link} from 'react-router-dom'
import Loader from '../loader/Loader'

const Contact = () => {
    const contact_form = useRef()
    const [submitted, setsubmitted] = useState(false)
    const [loading, setloading] = useState(false)
    const [formData, setFormData] = useState({
        fname:'',
        lname:'',
        phone:'',
        email:'',
        message:''
    })
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
    const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValidPhoneNumber = (phone) => {
        const phoneRegex = /^[2-9]{1}[0-9]{9}$/;
        return phoneRegex.test(phone);
    };
    

    const validateForm = () => {
    let formErrors = {};
    if (!formData.fname) formErrors.fname = 'First name is required';
    if (!formData.lname) formErrors.lname = 'Last name is required';
    if (!formData.phone) {
        formErrors.phone = 'Phone number is required';
      } else if (!isValidPhoneNumber(formData.phone)) {
        formErrors.phone = 'Invalid phone number.';
    }
    if (!formData.email) {
        formErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
        formErrors.email = 'Invalid email address';
    }
    if (!formData.message) formErrors.message = 'Message is required';
    return formErrors;
    };


    const sendEmail = (e) => {
        e.preventDefault()
        const formErrors = validateForm();
        if(Object.keys(formErrors).length ===0) { 
            setloading(true)
            emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                contact_form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                console.log('SUCCESS!');
                contact_form.current.reset();
                },
                (error) => {
                console.log('FAILED...', error.text);
                },
            );
            setTimeout(() => {
                setsubmitted(true)
                setloading(false)
            }, 2000);
         
        }
        else {
            setErrors(formErrors);
        }
      };

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
                <Link to="mailto:irwinfarms@yahoo.com" target='_blank'>
                    <FontAwesomeIcon icon={faEnvelope}/>
                </Link>
                <Link to='tel:+14045168077' target='_blank'>
                    <FontAwesomeIcon icon={faPhone}/>
                </Link>
            </div>
        </div>
        <div className={styles.form_container}>
            {submitted && !loading ? 
                <div className={styles.submit_success}>
                    <h1>Message sent</h1>
                    <FontAwesomeIcon icon={faCircleCheck} className={styles.checkIcon}/>
                    <p>We will be in touch soon!</p>
                </div>
                :
                loading && !submitted ?
                <Loader/>
                :
                <div>
                <h1>Send us a message: </h1>
                <form className={styles.contact_form} ref={contact_form}>
                    <div className={styles.input_flex}>
                        <div>
                            <label>First Name</label>
                            <input 
                            type="text" 
                            name="fname" 
                            value={formData.fname}
                            onChange={handleChange}
                            maxLength={12}
                            />
                            {errors.fname && <p className={styles.error}>{errors.fname}</p>}

                        </div>
                        <div>
                            <label>Last Name</label>
                            <input 
                            type="text"
                            name="lname"
                            value={formData.lname}
                            onChange={handleChange}
                            maxLength={18}
                            />
                            {errors.lname && <p className={styles.error}>{errors.lname}</p>}

                        </div>
                    </div>

                    <div className={styles.input_flex}>
                        <div>
                            <label>Phone</label>
                            <input 
                            type="text" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            maxLength={10}
                            />
                           {errors.phone && <p className={styles.error}>{errors.phone}</p>}

                        </div>
                        <div>
                            <label>Email</label>
                            <input 
                            type="text" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            />
                            {errors.email && <p className={styles.error}>{errors.email}</p>}

                        </div>
                    </div>
                    <label>Message</label>
                    <textarea 
                    type="text" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={300}
                    ></textarea>
                    {errors.message && <p className={styles.error}>{errors.message}</p>}



                <button onClick={(e)=>{
                    sendEmail(e)
                }}type='button'>Send</button> 
            </form>
                </div>
            }
           
        </div>
      
    </div>
  )
}

export default Contact