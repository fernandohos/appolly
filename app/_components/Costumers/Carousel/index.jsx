"use client";

import styles from "./styles.module.css";
import { register } from "swiper/element/bundle";
import { useRef, useEffect } from "react";
import { CarouselCard } from "../CarouselCard";
import carlaPhoto from "@public/carla.png";
import craigPhoto from "@public/craig.png";
import jocelynPhoto from "@public/jocelyn.png";

const cardsInfo = [
  {
    name: "CARLA PRESS",
    profession: "APP DEVELOPER",
    photoUrl: carlaPhoto,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.",
  },
  {
    name: "CRAIG GOUSE",
    profession: "UI/UX DESIGNER",
    photoUrl: craigPhoto,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.",
  },
  {
    name: "JOCELYN SEPTIMUS",
    profession: "WEBSITE DEVELOPER",
    photoUrl: jocelynPhoto,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.",
  },
];

export function Carousel() {
  const swiperRef = useRef(null);

  useEffect(() => {
    register();

    const params = {
      slidesPerView: 3,
      pagination: true,
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
      breakpoints: {
        0: {
          slidesPerView: "auto",
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
      injectStyles: [
        `
        :host .swiper {
          overflow: visible;
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
        {cardsInfo.map((cardInfo) => (
          <CarouselCard key={cardInfo.name} {...cardInfo} />
        ))}
      </swiper-container>
    </div>
  );
}
