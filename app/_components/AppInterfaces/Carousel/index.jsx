"use client";

import styles from "./styles.module.css";
import { register } from "swiper/element/bundle";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { useRef, useEffect } from "react";
import slide1 from "@public/interface-1.png";
import slide2 from "@public/interface-2.png";
import slide3 from "@public/interface-3.png";
import slide4 from "@public/interface-4.png";
import Image from "next/image";

export function Carousel() {
  const swiperRef = useRef(null);

  useEffect(() => {
    register();

    const params = {
      slidesPerView: 2,
      pagination: true,
      navigation: true,
      grabCursor: true,
      centeredSlides: true,
      effect: "coverflow",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 5,
        slideShadows: false,
      },
      loop: true,
      injectStyles: [
        `
        :host .swiper {
          overflow: visible;
        }

        :host .swiper-button-prev, .swiper-button-next {
          background: none;
          border: 2px solid var(--orange);
          border-radius: 5rem;
          padding: 2rem;
          width: 2rem;
          height: 2rem;
          transition: all ease .2s;
          --swiper-theme-color: var(--orange);
          background: var(--white);
        }

        :host .swiper-button-prev:hover, .swiper-button-next:hover {
          background: var(--orange);
          --swiper-theme-color: var(--white);
        }

        :host .swiper::part(bullet-active) {
          background: var(--orange);
        }

        :host .swiper-pagination {
          bottom: -2rem;
        }

        .swiper-pagination > .swiper-pagination-bullet-active {
            background-color: var(--orange);
        }

        :root {
          --swiper-theme-color: var(--orange);
          --swiper-pagination-color: var(--orange);
        }
        `,
      ],
    };

    Object.assign(swiperRef.current, params);

    swiperRef.current.initialize();
  }, []);

  return (
    <div className={styles.carouselContainer}>
      <swiper-container init="false" ref={swiperRef}>
        <swiper-slide>
          <div className={styles.slide}>
            <Image src={slide1} fill sizes="245 532" alt="app interface" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className={styles.slide}>
            <Image src={slide2} fill sizes="245 532" alt="app interface" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className={styles.slide}>
            <Image src={slide3} fill sizes="245 532" alt="app interface" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className={styles.slide}>
            <Image src={slide4} fill sizes="245 532" alt="app interface" />
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  );
}
