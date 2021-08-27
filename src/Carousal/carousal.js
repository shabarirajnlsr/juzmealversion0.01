import * as React from "react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./carousal.css";

SwiperCore.use([Navigation, Autoplay]);

const Carousal = () => {

  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  
  const renderSwiperSlide = (content, index) => {
    return (
      <SwiperSlide key={`slide-${index}`}>
        <div>
          <img className="t1-slider-element" alt={`masala-${index}`} src={`/carousal/masalabox${content}.jpg`} />
        </div>
      </SwiperSlide>
    );
  };

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={5}
      navigation={{
        // Both prevEl & nextEl are null at render so this does not work
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}

      loop
      autoplay={{ delay: 3000 }}
      onSlideChange={() => console.log("slide change")}

      onSwiper={(swiper) => {
        // Delay execution for the refs to be defined
        setTimeout(() => {
          // Override prevEl & nextEl now that refs are defined
          swiper.params.navigation.prevEl = navigationPrevRef.current
          swiper.params.navigation.nextEl = navigationNextRef.current

          // Re-init navigation
          swiper.navigation.destroy()
          swiper.navigation.init()
          swiper.navigation.update()
        })
      }}
    >
      {[1, 2, 3, 4, 1, 2].map(renderSwiperSlide)}
      <div ref={navigationPrevRef} className="swiper-button-prev" >
          <img src="/icons/left-arrow.png" alt="arrow-left"/>
      </div>
      <div ref={navigationNextRef} className="swiper-button-next">
        <img src="/icons/right-arrow.png" alt="arrow-right"/>
      </div>
    </Swiper>
  );
};

export default Carousal;
export { Carousal };
