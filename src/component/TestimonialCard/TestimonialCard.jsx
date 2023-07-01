import { Box } from "@mui/material";
import '../../styles/index.scss';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules

import AddIcon from "@mui/icons-material/Add";


import Boy from '../../assets/boy.png'

const TestimonialCard = () => {
    return (
        <>
            <Box>
                <Swiper>
                    <SwiperSlide>
                        <Box
                            sx={{
                                width: "50%",
                                height: "100%",
                                margin: "auto",
                                backgroundColor: "red",
                            }}

                            clasName="testimonial"
                        >
                            <Box
                                sx={{  height: "100%", width: "100%", padding: '60px', borderRadius: '20px' }}
                            >
                                <p>
                                    I recently worked with Saurabh Infosys to develop a mobile and
                                    web app, with landing page for my business and I couldn't be
                                    happier with the results. The team at Saurabh Infosys was
                                    incredibly professional, knowledgeable and efficient
                                    throughout the entire process. They took the time to
                                    understand my business needs and provided valuable insights
                                    and suggestions to enhance the functionalities. The end result
                                    was a high-quality, user-friendly and visually appealing
                                    interface. I would highly recommend Saurabh Infosys to anyone
                                    looking for a reliable and effective development partner
                                    Regards, Aleks
                                </p>
                                <br />
                                <span style={{ background: '#00C3D4', padding: '2px', marginTop: '20px' }}>Aleks</span>
                            </Box>


                            <img src={Boy} alt="" />
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box sx={{ width: "100%", height: "100%", background: "green" }}>
                            hiPortfolio
                        </Box>
                    </SwiperSlide>
                </Swiper>
            </Box>
        </>
    );
};

export default TestimonialCard;
