

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import '../../styles/index.scss';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Box } from "@mui/material";

import c1 from '../../assets/c1.png'
 
import c3 from '../../assets/c3.png'
import c4 from '../../assets/c4.png'
 
import c6 from '../../assets/c6.png'
import c7 from '../../assets/c7.png'
import c8 from '../../assets/c8.png'
import c9 from '../../assets/c9.png'
import c10 from '../../assets/c10.png'
import c11 from '../../assets/c11.png'
 
import c13 from '../../assets/c13.png'




const Slider = () => {
    
    return (

        <>

            <Swiper
                spaceBetween={40}
                centeredSlides={true}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter:false,

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
                        <img src={c1} alt="" style={{ mixBlendMode: "multiply", filter: "contrast(1)"}}/>
                    </Box>
                </SwiperSlide>
 

                
                <SwiperSlide>
                    <Box sx={{ textAlign: 'center' }}>
                        <img src={c3} alt="" style={{ mixBlendMode: "multiply", filter: "contrast(1)"}}/>
                    </Box>
                </SwiperSlide>

                
                <SwiperSlide>
                    <Box sx={{ textAlign: 'center' }}>
                        <img src={c4} alt="" style={{ mixBlendMode: "multiply", filter: "contrast(1)"}}/>
                    </Box>
                </SwiperSlide>

                
         
          
                

                <SwiperSlide>
                    <Box sx={{ textAlign: 'center' }}>
                        <img src={c6} alt="" style={{ mixBlendMode: "multiply", filter: "contrast(1)"}}/>
                    </Box>
                </SwiperSlide>

                
                <SwiperSlide>
                    <Box sx={{ textAlign: 'center' }}>
                        <img src={c7} alt="" style={{ mixBlendMode: "multiply", filter: "contrast(1)"}}/>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box sx={{ textAlign: 'center' }}>
                        <img src={c8} alt="" style={{ mixBlendMode: "multiply", filter: "contrast(1)"}}/>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box sx={{ textAlign: 'center' }}>
                        <img src={c9} alt="" style={{ mixBlendMode: "multiply", filter: "contrast(1)"}}/>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box sx={{ textAlign: 'center' }}>
                        <img src={c10} alt="" style={{ mixBlendMode: "multiply", filter: "contrast(1)"}}   />
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box sx={{ textAlign: 'center' }}>
                        <img src={c11} alt="" style={{ mixBlendMode: "multiply", filter: "contrast(1)"}}/>
                    </Box>
                </SwiperSlide>
         

                <SwiperSlide>
                    <Box sx={{ textAlign: 'center' }}>
                        <img src={c13} alt="" style={{ mixBlendMode: "multiply", filter: "contrast(1)"}}/>
                    </Box>
                </SwiperSlide>
                
            
                
              
            
                
            </Swiper>



        </>

    );
}


export default Slider;