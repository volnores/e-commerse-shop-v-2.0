import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import img1 from '../../../../public/images/carousel/img1.jpg';
import img2 from '../../../../public/images/carousel/img2.png';
import img3 from '../../../../public/images/carousel/img3.jpg';
import img4 from '../../../../public/images/carousel/img4.jpg';

import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const index: React.FC = () => {
  return (
    <div className="bg-white text-black dark:bg-gray-800 dark:text-white">
      <Swiper
        style={{ height: '600px' }}
        className="flex items-center md:mt-6 w-full xl:max-w-[1300px] mx-auto "
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={true}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}>
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
    </div>
  );
};

export default index;
