import { Box, Grid } from "@mui/material";
import Form from "../../component/form/Form";
import CallIcon from '@mui/icons-material/Call';
import NumberCounter from 'number-counter';


const ContactForm = () => {
    return (
        <>
            <Box sx={{ backgroundColor: "#282828", marginBottom: '60px' }}   >
                <Box
                    sx={{
                        width: { md: "60%", sm: '80%', xs: '100%' },
                        margin: 'auto',
                        backgroundColor: "white",
                        borderRadius: "5px",
                        padding: {md:"50px",sm:'30px',xs:'20px'},
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        position: 'relative',
                        top: '-100px'

                    }}
                >


                    <Grid container spacing={4}>

                        <Grid item xs={12} sm={12} md={7}>
                            <h2 style={{ fontSize: '2.2rem', paddingBottom: '30px' }}>Get In Touch</h2>
                            <Form />
                        </Grid>

                        <Grid item xs={12} sm={12} md={5}>
                            <Box className="ContactImgBox">
                                <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' ,  }}>
                                    <CallIcon sx={{ backgroundColor: 'white', width: '40px', height: '40px', borderRadius: '50%', padding: '7px' }} />
                                    <h6 style={{ color: 'white', fontSize: '1.6rem', marginLeft: '10px' }} > +91  8460039457</h6>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>



                <Box sx={{ width: '70%', margin: 'auto', paddingBottom: '60px' }}>
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                <span className="counter"><NumberCounter start={1} end={100} delay={5} />+</span>
                                <span className="counterHeading">Projects Done</span>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>

                                <span className="counter"><NumberCounter start={1} end={24} delay={5} />+</span>
                                <span className="counterHeading">Awards Won</span>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                <span className="counter"><NumberCounter start={1} end={12} delay={5} />+</span>
                                <span className="counterHeading">Years Experience</span>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>

                                <span className="counter"><NumberCounter start={1} end={352} delay={5} />+</span>
                                <span className="counterHeading">Happy Clients</span>
                            </Box>
                        </Grid>

                    </Grid>

                </Box>




            </Box>
        </>
    );
};

export default ContactForm;
