import Image from "next/image";
// Core modules imports are same as usual
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react';

// Styles must use direct files imports
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/autoplay";








const Swipper = () => {
    return ( 

  <div className="">
  <div className="grid grid-cols-12">
    <div className=" col-span-12 md:col-span-12  md:col-start-1 col-start-1 overflow-x-hidden">
    <Swiper
     modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
     spaceBetween={0}
     slidesPerView={1}
     scrollbar={{ draggable: true, hide:true }}
autoplay={{delay: 4000, stopOnLastSlide: false, disableOnInteraction: true }}
     breakpoints= {{
        100: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        480: {
          slidesPerView: 1,
          spaceBetween:0
        },

        640: {
          slidesPerView: 1,
          spaceBetween: 0
        }}
      }
    >
<SwiperSlide className="hidden sm:block">
<Image priority={true} src="/imagenes/familia-internet.jpg" alt="" width={2019} height={533} />
</SwiperSlide>
<SwiperSlide className="sm:hidden">
<Image priority={true} src="/imagenes/familia-internet-sm.jpg" alt="" width={650} height={350} />
</SwiperSlide>
</Swiper>
</div>
</div>
</div>

     );
}
 
export default Swipper;