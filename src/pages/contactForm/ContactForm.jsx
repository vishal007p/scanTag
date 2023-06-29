import { Box, Grid } from "@mui/material";
import Form from "../../component/form/Form";
import CallIcon from '@mui/icons-material/Call';



const ContactForm = () => {
    return (
        <>
            <Box sx={{ backgroundColor: "#282828", paddingBottom: '100px' }}>
                <Box
                    sx={{
                        width: "60%",
                        margin: 'auto',
                        backgroundColor: "white",
                        borderRadius: "5px",
                        padding: "50px",
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        flexDirection: 'column'
                        
                    }}
                >


                    <Grid container spacing={4}>

                        <Grid item xs={7}>
                            <h2 style={{ fontSize: '2.2rem', paddingBottom: '30px' }}>Get In Touch</h2>
                            <Form />
                        </Grid>

                        <Grid item xs={5}>
                            <Box className="ContactImgBox">
                                <Box sx={{width:'100%' ,display:'flex',alignItems:'center',justifyContent:'center' }}>
                                    <CallIcon  sx={{backgroundColor:'white', width:'40px', height:'40px',borderRadius:'50%',padding:'7px'}} />
                                    <h6 style={{color:'white',fontSize:'1.6rem',marginLeft:'10px'}}> +012-345-6789</h6>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
};

export default ContactForm;
