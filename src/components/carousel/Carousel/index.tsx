import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../../../../public/images/carousel/img1.jpg";
import img2 from "../../../../public/images/carousel/img2.png";
import img3 from "../../../../public/images/carousel/img3.jpg";
import img4 from "../../../../public/images/carousel/img4.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const index = () => {
  return (
    <Swiper
      style={{ width: "1700px", height: "750px" }}
      className="flex items-center"
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      autoplay={true}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <img src={img1} alt="img1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="img2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="img3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} alt="img4" />
      </SwiperSlide>
    </Swiper>
  );
};

export default index;
