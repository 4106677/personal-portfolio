import React from "react";
import "./testimonials.css";
import { reviews } from "../../services/Api";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Testimonials = () => {
  return (
    <section className="testimonials container section" id="testimonials">
      <h2 className="section__title">They say about me </h2>
      <span className="section__subtitle">Testimonial</span>

      <Swiper
        className="testimonials__container mySwiper"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {reviews.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="testimonials__card" key={id}>
              <img src={image} alt={title} className="testimonials__img" />
              <h3 className="testimonials__name">{title}</h3>
              <p className="testimonials__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
