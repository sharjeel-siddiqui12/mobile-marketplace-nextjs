'use client';

import React from 'react'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import classes from './image-slideshow.module.css'

import mobile1 from '@/assets/mobile-1.png'
import mobile2 from '@/assets/mobile-2.png'
import mobile3 from '@/assets/mobile-3.png'
import mobile4 from '@/assets/mobile-4.png'
import mobile5 from '@/assets/mobile-5.png'
import mobile6 from '@/assets/mobile-6.png'
import mobile7 from '@/assets/mobile-7.png'

const images = [
  { image: mobile1, alt: 'Mobile 1' },
  { image: mobile2, alt: 'Mobile 2' },
  { image: mobile3, alt: 'Mobile 3' },
  { image: mobile4, alt: 'Mobile 4' },
  { image: mobile5, alt: 'Mobile 5' },
  { image: mobile6, alt: 'Mobile 6' },
  { image: mobile7, alt: 'Mobile 7' }
]

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
  
}


