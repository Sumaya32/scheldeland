import React, { useEffect, useState } from 'react'
import styles from './carousel.module.css';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

export const Carousel = ({ items }) => {
    const [slide, setSlide] = useState(0)
    const [data] = useState(items)

    const nextSlide = () => {
        // setSlide(slide === data?.length - 1 ? 0 : slide + 1);
        setSlide(slide !== data?.length - 1 ? slide + 1 :  0);
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length-1 : slide - 1);
    }

    useEffect(()=>{
        // items &&   useState([ items])
    },[items])

    return (
        <div className={styles.carousel}>
            <BsArrowLeftCircleFill className={`${styles.arrow}  ${styles.arrowLeft}`} onClick={nextSlide} />
            {data?.map((item, index) =>
                <div  className={styles.contentContainer}>
                    <div className={slide === index ? `${styles.title}` : `${styles.title} ${styles.titleHidden}`}><p>{item?.title}</p></div>
                    <img src={item?.menuimage?.sourceUrl} className={slide === index ? `${styles.slide}` : `${styles.slide} ${styles.slideHidden}`}/>
                </div>

            )}
            <BsArrowRightCircleFill className={`${styles.arrow} ${styles.arrowRight}`} onClick={prevSlide} />
            <span className={styles.indicators}>
                {data?.map((_, index) => {
                    return <div>
                         <button className={slide === index ? `${styles.indicator}` : `${styles.indicator} ${styles.indicatorInactive}`} key={index} onClick={() => setSlide(index)}></button>
                    </div>
                })}
            </span>
        </div>
    )
}