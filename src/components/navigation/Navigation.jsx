import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styles from './navigation.module.css'
import logo from '../../assets/logo_2.svg'
const Navigation = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(()=>{
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }

  },[])

  return (
      <div className={`pd-hz ${styles.logoContainer}`}>
            <div style={{textAlign:'center'}}>
                <img src={logo} className={styles.logo}/>
            </div>
            {/* <div className={styles.icon}>
                {width > 1024 ? 
                <p>About</p>
                :
                <FontAwesomeIcon icon={faBars}/>
                }
            </div> */}
        </div>
  )
}

export default Navigation