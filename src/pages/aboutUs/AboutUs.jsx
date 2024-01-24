import { Box, Grid } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import Slider from "../../component/Slider/Slider";
import CommanBtn from "../../component/CommanBtn/CommanBtn";






const AboutUs = () => {
    return (
        <>
            <Box
                sx={{
                    width: "100%",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                }}
                className="AbotUs"
                id="service"
            >
                <Box
                    sx={{
                        width: { md: '70%', sm: '90%', xs: '90%' },
                        margin: "auto",

                    }}
                    className="aboutUsContainer"
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={6}>
                            <Box className="imgBox">
                                <Box sx={{ width: { md: '80%', sm: '100%', xs: '100%' }, margin: 'auto' }}>
                                    <img
                                        src="https://images.pexels.com/photos/3178818/pexels-photo-3178818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        style={{ borderRadius: '250px 250px 0px 0px', width:'100%' }}
                                    />
                                </Box>

                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={12} md={6}>
                            <Box className="aboutDetais" >
                                <h6>It Support For Business</h6>
                                <h1>Preparing for your success trusted source in IT services.</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempor incididunt ut labore
                                </p>

                                <ul>
                                    <li>
                                        <DoneIcon sx={{ marginRight: '10px', color: '#F4CE14' }} />
                                        Which Means As The Company Ramps
                                    </li>
                                    <li>
                                        <DoneIcon sx={{ marginRight: '10px', color: '#F4CE14' }} />
                                        Available In 14.1-In. And 16-In. Versions.
                                    </li>
                                    <li>
                                        <DoneIcon sx={{ marginRight: '10px', color: '#F4CE14' }} />
                                        The Potential Loss Of The Touch Bar.
                                    </li>
                                    <li>
                                        <DoneIcon sx={{ marginRight: '10px', color: '#F4CE14' }} />
                                        High-Speed USB 4.0.
                                    </li>
                                    <li>
                                        <DoneIcon sx={{ marginRight: '10px', color: '#F4CE14' }} />
                                        The Potential Loss Of The Touch Bar.
                                    </li>
                                    <li>
                                        <DoneIcon sx={{ marginRight: '10px', color: '#F4CE14' }} />
                                        Available In 14.1-In. And 16-In. Versions.
                                    </li>



                                </ul>


                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>


            <Box sx={{ width: '100%', height: '300px', backgroundColor: '#E9F6FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                <Box sx={{ width: { md: '70%', sm: '90%', xs: '90%' }, margin: 'auto' }}>

                    <Slider />

                </Box>


            </Box>

        </>
    );
};

export default AboutUs;
