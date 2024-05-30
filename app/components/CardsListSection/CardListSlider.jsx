"use client";

import Swiper from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination"; 
import Styles from './CardListSlider.module.css';
import Link from "next/link";
import { Card } from "../Card/Card";
import { useEffect } from "react";

export const CardsListSlider = (props) => {

useEffect (() => {
    const options = {

        loop: false,
        spaceBetween: 10, 
        allowTouchMove: true, 
        slidesPerView: 1, 
        autoplay: {
          enabled: false,
        },
      
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
          enabled: true,
          clickable: true,
        },
              // Параметры слайдера для мониторов > 450px
        breakpoints: {
          450: {
            loop: true,
            spaceBetween: 20,
            slidesPerView: "auto",
            allowTouchMove: false,
            speed: 6500,
            autoplay: {
              enabled: true,
              delay: 0,
            },
            pagination: {
              enabled: false,
            },
          },
        },
        modules: [Autoplay, Pagination],
      };
      
    new Swiper(".swiper", options)

},[])

return (
    <div class={`swiper ${Styles['slider']}`}>
  <div class={`swiper-wrapper ${Styles['swiper-wrapper']}`}>
  {props.data.map((item) => {
      return (
        <li className={`swiper-slide ${Styles["slide"]}`}
         key={item.id}>
          <Link 
          href={`/games/${item.id}`}>
            <Card
              {...item}
            />
          </Link>
        </li>
      );
    })}
  </div>
  <div className={`swiper-pagination ${Styles["pagination"]}`}></div>
</div>
);
};