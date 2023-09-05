import React, { useEffect, useState } from 'react'
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
            <BsArrowLeftCircleFill className={`${styles.arrow}  ${styles.arrowLeft}`} onClick={nextSlide} />
            {data?.map((item, index) =>
                <div  className={styles.contentContainer}>
                    <img src={item?.menuimage?.sourceUrl} className={slide === index ? `${styles.slide}` : `${styles.slide} ${styles.slideHidden}`}/>
                    <div className={slide === index ? `${styles.title}` : `${styles.title} ${styles.titleHidden}`}>
                        <p>{item?.title}</p>
                        <p className={styles.price}>{item?.price}</p>
                        </div>
                    {/* <div className={slide === index ? `${styles.price}` : `${styles.price} ${styles.priceHidden}`}><p> <p className={styles.price}>{item?.price}</p></p></div> */}
                   
                </div>

            )}
            <BsArrowRightCircleFill className={`${styles.arrow} ${styles.arrowRight}`} onClick={prevSlide} />
            <span className={styles.indicators}>
                {data?.map((_, index) => {
                    return <div className={styles.slideAndTextContainer}>
                         <button className={slide === index ? `${styles.indicator}` : `${styles.indicator} ${styles.indicatorInactive}`} key={index} onClick={() => setSlide(index)}></button>
                    </div>
                })}
            </span>
        </div>
    )
}