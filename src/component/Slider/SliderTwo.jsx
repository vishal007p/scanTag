import { Box } from "@mui/material";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import required modules

import AddIcon from '@mui/icons-material/Add';


import Port1 from '../../assets/port1.png';
import Port2 from '../../assets/port2.png';
import Port3 from '../../assets/port3.png';
import Port4 from '../../assets/port4.png';
import Port5 from '../../assets/port5.png';
import Port6 from '../../assets/port6.png';



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


                    <SwiperSlide>
                        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: 'center' }}>
                            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={Port1} alt="" style={{ width: '90%', height: "100%", borderRadius: '10px 10px 0px 0px' }} />
                            </Box>
                            <Box sx={{ background: '#282828', width: '100%', height: '10%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 25px', borderRadius: '30px' }}>
                                <Box>
                                    <span style={{ color: 'white' }}>ETRANSPORT</span>
                                </Box>
                                <Box>
                                    <AddIcon sx={{ color: 'white' }} />
                                </Box>

                            </Box>
                        </Box>
                    </SwiperSlide>


                    <SwiperSlide>
                        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: 'center' }}>
                            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={Port2} alt="" style={{ width: '90%', height: "100%", borderRadius: '10px 10px 0px 0px' }} />
                            </Box>
                            <Box sx={{ background: '#282828', width: '100%', height: '10%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 25px', borderRadius: '30px' }}>
                                <Box>
                                    <span style={{ color: 'white' }}>EDMISSION ONLINE</span>
                                </Box>
                                <Box>
                                    <AddIcon sx={{ color: 'white' }} />
                                </Box>

                            </Box>
                        </Box>
                    </SwiperSlide>


                    <SwiperSlide>
                        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: 'center' }}>
                            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={Port3} alt="" style={{ width: '90%', height: "100%", borderRadius: '10px 10px 0px 0px' }} />
                            </Box>
                            <Box sx={{ background: '#282828', width: '100%', height: '10%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 25px', borderRadius: '30px' }}>
                                <Box>
                                    <span style={{ color: 'white' }}>RHOMBUS</span>
                                </Box>
                                <Box>
                                    <AddIcon sx={{ color: 'white' }} />
                                </Box>

                            </Box>
                        </Box>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: 'center' }}>
                            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={Port4} alt="" style={{ width: '90%', height: "100%", borderRadius: '10px 10px 0px 0px' }} />
                            </Box>
                            <Box sx={{ background: '#282828', width: '100%', height: '10%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 25px', borderRadius: '30px' }}>
                                <Box>
                                    <span style={{ color: 'white' }}>WMS</span>
                                </Box>
                                <Box>
                                    <AddIcon sx={{ color: 'white' }} />
                                </Box>

                            </Box>
                        </Box>
                    </SwiperSlide>


                    <SwiperSlide>
                        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: 'center' }}>
                            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={Port5} alt="" style={{ width: '90%', height: "100%", borderRadius: '10px 10px 0px 0px' }} />
                            </Box>
                            <Box sx={{ background: '#282828', width: '100%', height: '10%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 25px', borderRadius: '30px' }}>
                                <Box>
                                    <span style={{ color: 'white' }}>3ENDTSHOP</span>
                                </Box>
                                <Box>
                                    <AddIcon sx={{ color: 'white' }} />
                                </Box>

                            </Box>
                        </Box>
                    </SwiperSlide>


                    <SwiperSlide>
                        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: 'center' }}>
                            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={Port6} alt="" style={{ width: '90%', height: "100%", borderRadius: '10px 10px 0px 0px' }} />
                            </Box>
                            <Box sx={{ background: '#282828', width: '100%', height: '10%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 25px', borderRadius: '30px' }}>
                                <Box>
                                    <span style={{ color: 'white' }}>3ENDTSHOP</span>
                                </Box>
                                <Box>
                                    <AddIcon sx={{ color: 'white' }} />
                                </Box>

                            </Box>
                        </Box>
                    </SwiperSlide>


                </Swiper>
            </Box>
        </>


    );
}



export default SliderTwo;