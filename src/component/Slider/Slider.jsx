

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import '../../styles/index.scss';
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";



 
const Slider = () => {
    return (



        <>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 5,
                      spaceBetween: 50,
                    },
                  }}
            >
               
                        <SwiperSlide><img src="https://tfhtml.themepul.com/restly/assets/images/client-logo/client-logo-3.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://tfhtml.themepul.com/restly/assets/images/client-logo/client-logo-4.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://tfhtml.themepul.com/restly/assets/images/client-logo/client-logo-5.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://tfhtml.themepul.com/restly/assets/images/client-logo/client-logo-1.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://tfhtml.themepul.com/restly/assets/images/client-logo/client-logo-2.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://tfhtml.themepul.com/restly/assets/images/client-logo/client-logo-3.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://tfhtml.themepul.com/restly/assets/images/client-logo/client-logo-4.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://tfhtml.themepul.com/restly/assets/images/client-logo/client-logo-5.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://tfhtml.themepul.com/restly/assets/images/client-logo/client-logo-1.png" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="https://tfhtml.themepul.com/restly/assets/images/client-logo/client-logo-2.png" alt="" /></SwiperSlide>
                    
            </Swiper>



        </>

    );
}


export default Slider;