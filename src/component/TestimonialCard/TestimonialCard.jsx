import { Box } from "@mui/material";
import '../../styles/index.scss';
// Import Swiper React components
 

// Import Swiper styles
 
 

// import required modules

// import AddIcon from "@mui/icons-material/Add";

 


import boy from '../../assets/boy.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";


const TestimonialCard = () => {
    return (
        <>
            <Box sx={{ marginTop: '0px', width: '100%', margin: 'auto', marginBottom:'80px' }}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper223"
                >
                    <SwiperSlide>



                        <Box sx={{ width:'80%', margin:'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '60px' }}>

                            <Box sx={{ backgroundColor: 'white', borderRadius: '50%' }}>
                                <img src={boy} alt="" style={{ width: '80px', height: '80px' }} />

                            </Box>


                            <h6 style={{ textAlign: 'center', color: 'white', fontSize: '1.5rem',marginTop:'20px' }}>Name</h6>
                            {/* <span style={{color:'white',marginTop:'20px'}}>start</span> */}
                            <p style={{ textAlign: 'center', color: 'white' ,marginTop:'20px',lineHeight:'30px'}}>Your guidance and expertise was invaluable in solving the programming issue. Your patience and clear explanations made the process so much easier to understand. I truly appreciate your support.
                                Reema Fahad
                                Saueabh Infosys.</p>
                        </Box>



                    </SwiperSlide>



                    <SwiperSlide>



                        <Box sx={{ width:'80%', margin:'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '60px' }}>

                            <Box sx={{ backgroundColor: 'white', borderRadius: '50%' }}>
                                <img src={boy} alt="" style={{ width: '80px', height: '80px' }} />

                            </Box>


                            <h6 style={{ textAlign: 'center', color: 'white', fontSize: '1.5rem',marginTop:'20px' }}>Name</h6>
                            {/* <span style={{color:'white',marginTop:'20px'}}>start</span> */}
                            <p style={{ textAlign: 'center', color: 'white' ,marginTop:'20px',lineHeight:'30px'}}>Your guidance and expertise was invaluable in solving the programming issue. Your patience and clear explanations made the process so much easier to understand. I truly appreciate your support.
                                Reema Fahad
                                Saueabh Infosys.</p>
                        </Box>



                    </SwiperSlide>



                    <SwiperSlide>



                        <Box sx={{ width:'80%', margin:'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '60px' }}>

                            <Box sx={{ backgroundColor: 'white', borderRadius: '50%' }}>
                                <img src={boy} alt="" style={{ width: '80px', height: '80px' }} />

                            </Box>


                            <h6 style={{ textAlign: 'center', color: 'white', fontSize: '1.5rem',marginTop:'20px' }}>Name</h6>
                            {/* <span style={{color:'white',marginTop:'20px'}}>start</span> */}
                            <p style={{ textAlign: 'center', color: 'white' ,marginTop:'20px',lineHeight:'30px'}}>Your guidance and expertise was invaluable in solving the programming issue. Your patience and clear explanations made the process so much easier to understand. I truly appreciate your support.
                                Reema Fahad
                                Saueabh Infosys.</p>
                        </Box>



                    </SwiperSlide>



                    
               

                </Swiper>
            </Box>
        </>
    );
};

export default TestimonialCard;
