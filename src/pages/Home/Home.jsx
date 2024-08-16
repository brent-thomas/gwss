import React, {useRef, useState, useEffect} from 'react'
import WheatFarmOne from '../../assets/wheat_farm_one.jpg'
import styles from './Home.module.css'
import Contact from '../../components/contact/Contact'
import farmSign from '../../assets/irwin_farms_sign.jpg'
import tractorInField from '../../assets/tractor_wheat_field.jpg'
import FifteenYears from '../../assets/15_years.webp'
import image1 from '../../assets/trailers.jpg'
import image2 from '../../assets/round_bales.jpg'
import image3 from '../../assets/loaded_truck.jpg'
import image4 from '../../assets/square_field.jpg'
import image5 from '../../assets/loaded_truck_2.jpg'
import image6 from '../../assets/field_fence.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrailer, faTruck, faWheatAwn } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const [showFifteen, setShowFifteen] = useState(false);
    const contactUsRef = useRef(null);
    const containerRef = useRef(null);
    const iconsRef = useRef([]);
    const imageRefs = useRef([]);  
    const scrollToContactUs = () => {
        contactUsRef.current.scrollIntoView({ behavior: 'smooth' });
      };
    useEffect(()=>{
        const handleResize = () => {
          setWidth(window.innerWidth)
        }
    
        window.addEventListener('resize', handleResize)
        
        return () => {
          window.removeEventListener('resize', handleResize)
        }
    
    },[])
    
    useEffect(() => {
        const observer = new IntersectionObserver(  // Step 2: Create an Intersection Observer instance
            ([entry]) => {
                if (entry.isIntersecting) { 
                    setShowFifteen(true); 
                }
            },
            {
                threshold: 0.2, 
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);  
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);  
            }
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.slideUp);
                    }
                });
            },
            { threshold: 0.7 } 
        );

        iconsRef.current.forEach(icon => {
            if (icon) observer.observe(icon);
        });

        return () => {
            iconsRef.current.forEach(icon => {
                if (icon) observer.unobserve(icon);
            });
        };
    }, []);


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.show);
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the image is visible
        );

        imageRefs.current.forEach(image => {
            if (image) observer.observe(image);
        });

        return () => {
            imageRefs.current.forEach(image => {
                if (image) observer.unobserve(image);
            });
        };
    }, []);

  return (
    <div className={`${styles.container}`}>
        <div className={styles.headerContainer}>
           
            
            <div className={`${styles.section} ${styles.bkgd_yellow} ${width > 1024 ? 'pd-hz': null}`}>
                <div className={styles.overlay}></div>
                <div className={`pd-hz ${styles.headerText}`}>
                    <h1 style={{fontSize:'40px', color:'#0F1109', fontFamily:'Poppins'}}>
                        Georgia's #1 Bulk Wheat Straw Supplier
                    </h1>
                    <p>Serving all 159 counties in Georgia, North Florida, and Southern Tennessee</p> 
                    <button type="button" onClick={scrollToContactUs}>Contact Us</button>
                </div>
                <div className={styles.headerImage}>
                    <img src={WheatFarmOne}/>
                </div>
            </div>

        </div>


            <div className={`pd-hz ${styles.familyOwned}`}>
                <div>
                <h1>Family Owned & Operated</h1>
            
                </div>
                <div>
                <p>
                    Since 2009, our family-owned business has grown into one of Georgia’s top commercial wheat straw
                    providers, fueled by our passion for agriculture. We pride ourselves on exceptional customer service,
                    offering direct delivery to your business or job site for all your erosion control needs.
                    
                    </p>

                </div>
            </div>

            <div className={`${styles.familyOwned_photos} ${width > 1024 ? 'pd-hz': null}`}>

                {width < 1024 ?
                    <div style={{position:'relative'}} ref={containerRef} >
                        <div className={`${styles.fifteen_container} ${showFifteen ? styles.showFifteen : ''}`}>
                            <img src={FifteenYears} className={styles.fifteen}/>
                        </div>
                        <img src={farmSign}/>
                    </div>
                    :
                    <div>
                        <img src={farmSign}/>
                    </div>
                }

                {width > 1024 ? 
                <div style={{position:'relative'}} ref={containerRef} >
                    <div className={`${styles.fifteen_container} ${showFifteen ? styles.showFifteen : ''}`}>
                        <img src={FifteenYears} className={styles.fifteen}/>
                    </div>
                    <img src={tractorInField}/>
                </div>

                : 
                <div>
                    <img src={tractorInField}/>
                </div>
                }
               
                
            </div>

            <div className={`pd-hz ${styles.offerings}`}>
                <h1 style={{fontSize:'33px'}}>
                    Products & Services
                </h1>
                <div className={styles.flex_container}>
                    <div className={styles.card}>
                        <FontAwesomeIcon 
                        icon={faWheatAwn} 
                        className={styles.cardIcon} 
                        ref={el => iconsRef.current[0] = el}
                        />
                        <h2>Square Bales</h2>
                        
                        <p>Our Two String Square Bales are tightly packed to maximize value, making them perfect for large-scale erosion control and commercial projects.</p>
                    </div>

                    <div className={styles.card}>
                        <FontAwesomeIcon
                        ref={el => iconsRef.current[1] = el}
                        icon={faTrailer} className={styles.cardIcon}/>
                        <h2>Short & Long Trailers</h2>
                        <p>We offer short, long, and drop-and-fill trailers to meet all your bulk wheat straw transport needs.</p>
                    </div>

                    <div className={styles.card}>
                    <FontAwesomeIcon
                    ref={el => iconsRef.current[2] = el}
                    icon={faTruck} className={styles.cardIcon}/>
                        <h2>Delivery & Pickup</h2>
                        <p>We deliver bulk wheat straw directly to job sites for contractors and erosion control companies. Pickup is also available in Unadilla, Georgia. </p>
                    </div>
                    
                </div>
            </div>

            <div className={`pd-hz ${styles.gallery}`}>
                <div>
                    <img src={image6}
                     ref={el => imageRefs.current[0] = el} 
                    />
                </div>
                <div>
                    <img src={image2}
                     ref={el => imageRefs.current[1] = el} 
                    />
                </div>
                <div>
                    <img src={image3}
                     ref={el => imageRefs.current[2] = el} 
                    />
                </div>
                <div>
                    <img src={image4}
                     ref={el => imageRefs.current[3] = el} 
                    />
                </div>
                <div>
                    <img src={image5}
                     ref={el => imageRefs.current[4] = el} 
                    />
                </div>
                <div>
                    <img src={image1}
                     ref={el => imageRefs.current[5] = el} 
                    />
                </div>
            </div>

        

        {/* <div className={`${styles.section} ${styles.bkgd_yellow}`}>
            <div className='pd-hz'>
                <h1 style={{fontSize:'40px', color:'#0F1109', fontFamily:'Poppins'}}>
                    Georgia's #1 Bulk Wheat Straw Supplier
                </h1>
                <div className={styles.white_box}>
                    <p>
                    Serving all of Georgia, North Florida, and Southern Tennessee.
                    </p>
                </div>
                <button>GET A QUOTE</button>
            </div>
            <div>
                <img src={WheatFarmOne}/>
            </div>
            
        </div>

    
        <div className={`pd-hz ${styles.section}`}>
            <div style={{textAlign:'center'}}>
            <h1>Everything We Offer</h1>
            </div>
            <div className={styles.tri_flex}>
                <div className={styles.card}>
                    <img src={square}/>
                    <div className={styles.cardText}>
                        <h2>Square Bales</h2>
                        <p>Our Two String Square Bales are perfect for bulk orders, ideal for large-scale projects and agricultural use. Tightly packed for efficient transport and minimal waste.</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <img src={round}/>
                    <div className={styles.cardText}>
                        <h2>Round Bales</h2>
                        <p>Our 5x6 Round Bales are designed for bulk supply, suitable for extensive erosion control and agricultural needs. Each bale offers a substantial quantity of wheat straw, reducing the need for frequent restocking.</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <img src={truck}/>
                    <div className={styles.cardText}>
                        <h2>Delivery & Pickup</h2>
                        <p>We deliver bulk wheat straw directly to job sites for contractors and erosion control companies. Pickup is also available in Unadilla, Georgia. </p>
                    </div>
                </div>
            </div>
        </div> */}
        <div ref={contactUsRef}>
            <Contact />
        </div>
        
    </div>
  )
}

export default Home