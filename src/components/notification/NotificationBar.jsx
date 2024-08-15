import React, {useEffect, useState} from 'react'
import styles from './notification.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
const NotificationBar = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`pd-hz ${styles.container} ${visible ? styles.show : ''}`}>
        <p> <FontAwesomeIcon icon={faCircleExclamation } className={styles.icon}/> We Deliver to Your Job Site! </p>
        <div className={styles.button}>
        <Link to='tel:+14045168077'>
            <FontAwesomeIcon icon={faPhone} className={styles.icon}/>
            Call now!
        </Link>
        </div>
    </div>
  )
}

export default NotificationBar