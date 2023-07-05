

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import '../../styles/index.scss';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Box } from "@mui/material";

import c1 from '../../assets/c1.png'
import c2 from '../../assets/c2.png'
import c3 from '../../assets/c3.png'
import c4 from '../../assets/c4.png'
import c5 from '../../assets/c5.png'
import c6 from '../../assets/c6.png'




const Slider = () => {

    return (

        <>

            <Swiper
                spaceBetween={40}
                centeredSlides={true}
                slidesPerGroup={1}
                slidesPerView={8}
                loop={true}
                mousewheel={{
                    pauseOnMouseEnter: false,
                }}
                loopFillGroupWithBlank={true}
                autoplay={{
                    delay: 100,
                    disableOnInteraction: false,



                }}


                modules={[Autoplay,]}

                breakpoints={{
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    800: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1000: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1400: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
            >

                <SwiperSlide>
                    <Box sx={{ textAlign: 'center' }}>
                        <img src={c1} alt="" style={{ mixBlendMode: "multiply", filter: "contrast(1)" }} />
                    </Box>
                </SwiperSlide>


                <SwiperSlide>
                    <Box sx={{ textAlign: 'center' }}>
                        <img src={c2} alt="" style={{ mixBlendMode: "multiply", filter: "contrast(1)" }} />
                    </Box>
                </SwiperSlide>



                <SwiperSlide>
                    <Box sx={{ textAlign: 'center' }}>
                        <img src={c3} alt="" style={{ mixBlendMode: "multiply", filter: "contrast(1)" }} />
                    </Box>
                </SwiperSlide>


                <SwiperSlide>
                    <Box sx={{ textAlign: 'center' }}>
                        <img src={c4} alt="" style={{ mixBlendMode: "multiply", filter: "contrast(1)" }} />
                    </Box>
                </SwiperSlide>




                <SwiperSlide>
                    <Box sx={{ textAlign: 'center' }}>
                        <img src={c5} alt="" style={{ mixBlendMode: "multiply", filter: "contrast(1)" }} />
                    </Box>
                </SwiperSlide>


                <SwiperSlide>
                    <Box sx={{ textAlign: 'center' }}>
                        <img src={c6} alt="" style={{ mixBlendMode: "multiply", filter: "contrast(1)" }} />
                    </Box>
                </SwiperSlide>


                <SwiperSlide>
                    <Box sx={{ textAlign: 'center' }}>
                        <img src={c1} alt="" style={{ mixBlendMode: "multiply", filter: "contrast(1)" }} />
                    </Box>
                </SwiperSlide>


                <SwiperSlide>
                    <Box sx={{ textAlign: 'center' }}>
                        <img src={c2} alt="" style={{ mixBlendMode: "multiply", filter: "contrast(1)" }} />
                    </Box>
                </SwiperSlide>



                <SwiperSlide>
                    <Box sx={{ textAlign: 'center' }}>
                        <img src={c3} alt="" style={{ mixBlendMode: "multiply", filter: "contrast(1)" }} />
                    </Box>
                </SwiperSlide>


                <SwiperSlide>
                    <Box sx={{ textAlign: 'center' }}>
                        <img src={c4} alt="" style={{ mixBlendMode: "multiply", filter: "contrast(1)" }} />
                    </Box>
                </SwiperSlide>




                <SwiperSlide>
                    <Box sx={{ textAlign: 'center' }}>
                        <img src={c5} alt="" style={{ mixBlendMode: "multiply", filter: "contrast(1)" }} />
                    </Box>
                </SwiperSlide>


                <SwiperSlide>
                    <Box sx={{ textAlign: 'center' }}>
                        <img src={c6} alt="" style={{ mixBlendMode: "multiply", filter: "contrast(1)" }} />
                    </Box>
                </SwiperSlide>






            </Swiper>



        </>

    );
}


export default Slider;