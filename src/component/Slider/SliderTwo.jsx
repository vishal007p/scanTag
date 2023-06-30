import { Box } from "@mui/material";
 
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules

import AddIcon from '@mui/icons-material/Add';


const SliderTwo = () => {
    return (

        <>

            <Box sx={{ marginBottom: '20PX' }}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}

                    breakpoints={{
                        "@0.00": {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        "@0.75": {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        "@1.00": {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        "@1.50": {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}


                >


                    {Array.from(Array(10)).map((_, index) => (
                        <>

                            <SwiperSlide>
                                <Box sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: 'center' }}>
                                    <Box sx={{ width: '100%' }}>
                                        <img src="https://saurabhinfosys.com/wp-content/uploads/2023/03/WALKDOGS-2.png" alt="" style={{ width: '100%', height: "100%" }} />
                                    </Box>
                                    <Box sx={{ background: 'white', width: '100%', height: '10%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Box>
                                            <span>WALKDOGS</span>
                                        </Box>
                                        <Box>
                                            <AddIcon />
                                        </Box>

                                    </Box>
                                </Box>


                            </SwiperSlide>
                        </>
                    ))}



                </Swiper>
            </Box>
        </>


    );
}



export default SliderTwo;