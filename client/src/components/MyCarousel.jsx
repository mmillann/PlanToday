import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import PlanCard from "./PlanCard";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

<link rel="stylesheet" href="carrusel.css" />;

function MyCarousel() {
  const [plans, setPlans] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await axios.get("http://localhost:8080/planes");
        setPlans(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPlans();
  }, []);

  function getSlidesPerView() {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1024) {
      return 5.5;
    } else if (screenWidth > 805) {
        return 3.1;
      } else if (screenWidth > 768) {
      return 3;
    } else if (screenWidth > 480) {
      return 2;
    } else if(screenWidth > 420){
        return 1.43;
    } else if(screenWidth > 360){
      return 1.33;
    } else{
        return 1.20;
    }
  }

  useEffect(() => {
    function handleResize() {
      setSlidesPerView(getSlidesPerView());
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="carousel">
      <div className="container contenedoraCarousel">
        <h2 className="heading text-center">Planes Destacados</h2>
        <div className="swiper">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={slidesPerView}
            spaceBetween={0}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 120,
              modifier: 2.7,
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            autoplay={{ delay: 3000 }}
            pauseOnMouseEnter={true}
          >
            {plans.map((plan) => (
              <SwiperSlide key={plan.id}>
                <PlanCard plan={plan} />
              </SwiperSlide>
            ))}
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow text-white botonesSlider">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow text-white">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default MyCarousel;
