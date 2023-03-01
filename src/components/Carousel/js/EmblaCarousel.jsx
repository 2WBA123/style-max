import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import imageByIndex from './imageByIndex'
import Image from 'next/image'
import styles from "../css/base.module.css"

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel({ slidesToScroll: 'auto', containScroll: 'trimSnaps' })

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {[1,2,3,4].map((index) => (
            <div className={styles.embla__slide} key={index}>
              <div className={styles.embla__slide__number}>
                <span>{index + 1}</span>
              </div>
              <Image
                className={styles.embla__slide__img}
                src={imageByIndex(index)}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
