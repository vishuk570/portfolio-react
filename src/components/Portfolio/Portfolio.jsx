import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { themeContext } from "../../Context";
import rcc1 from '../../img/Rcc1.jpg'
import rcc2 from '../../img/Rcc2.jpg'
import rcc3 from '../../img/Rcc3.jpg'
import Goplus from "../../img/Goplus.jpg"
import Gopluss from "../../img/Gopluss.jpg"
import CSD1 from "../../img/CSD1.png"
import CSD2 from "../../img/CSD2.png"
import Gemini_Tracker1 from "../../img/Gemini_Tracker1.jpg" 
import Gemini_Tracker2 from "../../img/Gemini_Tracker2.jpg" 

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Gopluss} alt="Gopluss" className="portfolio-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Goplus} alt="Goplus" className="portfolio-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rcc1} alt="rcc1" className="portfolio-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rcc2} alt="rcc2" className="portfolio-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rcc3} alt="rcc3" className="portfolio-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={CSD2} alt="CSD2" className="portfolio-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={CSD1} alt="CSD1" className="portfolio-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Gemini_Tracker1} alt="Gemini_Tracker1" className="portfolio-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Gemini_Tracker2} alt="Gemini_Tracker2" className="portfolio-image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
