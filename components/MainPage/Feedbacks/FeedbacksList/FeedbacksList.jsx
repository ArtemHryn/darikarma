"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import FeedbackElement from "./FeedbackElement";

import "swiper/css";
import "swiper/css/effect-coverflow";

const FeedbacksList = () => {
  const images = Array.from({ length: 13 }, (_, i) => i + 1);

  return (
    <div>
      <Swiper
        modules={[Autoplay, EffectCoverflow]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        effect="coverflow"
        slidesPerGroup={1}
        breakpoints={{
          360: { slidesPerView: 1, spaceBetween: 16 },
          768: { slidesPerView: 2, spaceBetween: 24 },
          1280: { slidesPerView: 3, spaceBetween: 32 },
        }}
        loop={true}
      >
        {images.map((num) => (
          <SwiperSlide key={num}>
            <FeedbackElement num={num} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeedbacksList;
