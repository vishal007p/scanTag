import { Box, Button, Grid } from "@mui/material";
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Img2 from '../../assets/img2.png'
import CommanBtn from "../../component/CommanBtn/CommanBtn";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    height: '120px',
    width: '140px',
    color: theme.palette.text.secondary,
    display: 'flex',
    alignItems: 'center', justifyContent: 'center'
}));
const Contact = () => {
    return (
        <>
            <Box className="contactUs">

                <Box sx={{ width: '80%', margin: 'auto', padding: '60px' }} >
                    <Grid container>
                        <Grid item xs={12} sm={6} md={6}>
                            <h6 style={{ color: 'white', fontSize: '1.2rem' }}>It Support For Business</h6>
                            <h2 style={{ fontSize: '2rem', color: 'white', marginTop: '20px' }}>It Support For Business</h2>

                        </Grid>
                        <Grid item xs={12} sm={6} md={6} sx={{display:'flex',alignItems:'center', justifyContent:'flex-end'}}>
                            <Box sx={{  width:'40%',height:'50px'}}>
                                 <CommanBtn text="View All Services"/>
                            </Box>
                        </Grid>

                    </Grid>

                </Box>


                <Box sx={{ width: '80%', margin: 'auto', padding: '60px' }}>
                    <Grid container spacing={2}>
                        {Array.from(Array(4)).map((_, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Box sx={{width:'90%'}}>
                                    <Item>
                                        <img src={Img2} alt="" style={{width:'100%'}}  />
                                    </Item>
                                    <h6 style={{color:'white',marginTop:'30px',fontSize:'1.2rem'}}>IT Management</h6>
                                    <p style={{color:'white',marginTop:'16px'}}>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusm od tempor incididunt</p>
                                </Box>
                            </Grid>
                        ))}


                    </Grid>

                </Box>

            </Box>
        </>
    );
}


export default Contact;