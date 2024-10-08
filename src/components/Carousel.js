import React, { useState } from 'react'
import styles from './carousel.module.css';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

export const Carousel = ({ items }) => {
    const [slide, setSlide] = useState(0)
    const [data] = useState(items)

    const nextSlide = () => {
        setSlide(slide !== data?.length - 1 ? slide + 1 :  0);
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length-1 : slide - 1);
    }

    return (
        <div className={styles.carousel}>
            <BsArrowLeftCircleFill className={`${styles.arrow}  ${styles.arrowLeft}`} onClick={nextSlide}/>
            {data?.map((item, index) =>
                <div  className={styles.contentContainer} key={index}>
            <div className={styles.imageContainer}>
            <img src={item?.menuimage?.sourceUrl} className={slide === index ? `${styles.slide}` : `${styles.slide} ${styles.slideHidden}`}/>

                </div>                    
                    <div className={slide === index ? `${styles.title}` : `${styles.title} ${styles.titleHidden}`}>
                            <p>{item?.title}</p>
                            <p className={styles.price}>{item?.price}</p>
                    </div>                   
                </div>

            )}
            <BsArrowRightCircleFill className={`${styles.arrow} ${styles.arrowRight}`} onClick={prevSlide} />
            <span className={styles.indicators}> 
         <div className={styles.indicatorsMiddleContainer}>
         {data?.map((_, index) => 
                    <div className={styles.slideAndTextContainer} key={index}>
                         <button className={slide === index ? `${styles.indicator}` : `${styles.indicator} ${styles.indicatorInactive}`} key={index} onClick={() => setSlide(index)}></button>
                    </div>
                )}
         </div>
            </span>
        </div>
    )
}