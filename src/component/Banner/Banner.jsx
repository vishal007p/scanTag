

import { Box, Grid, Typography } from '@mui/material';
import '../../styles/index.scss';
import CommanBtn from '../CommanBtn/CommanBtn';



const Banner = () => {
    return (

        <>

            <div className='bannerContainer' id="home">
                <Box sx={{ width: 'min(1420px , 95%)', margin: 'auto' }} className='bannerMain'>

                    <Grid container spacing={4} className='bannerContent'>
                        <Grid item p={0} xs={12} sm={12} md={6}   >
                            <Box sx={{ marginTop: {md:'100px',sm:'60px',xs:'20px'}, display: 'flex', alignItems: { md: 'flex-start', sm: 'center', xs: 'center' }, justifyContent: 'center', flexDirection: 'column' }}>
                                <h2 style={{ fontSize: '1.4rem', color: 'white', textAlign: { md: 'left', sm: 'center', xs: 'center' } }}>EMPOWER YOUR BUSINESS</h2>

                                <Typography variant='h1' sx={{ color: 'white', fontWeight: 'bold', fontSize: { md: '4rem', sm: '2rem', xs: '2rem' }, marginTop: '30px', textAlign: { md: 'left', sm: 'center', xs: 'center' } }}>Excellent IT services for your success</Typography>
                                <Box sx={{ marginTop: '50px', width: {md:'40%',sm:'90%',xs:'90%'}, height: '60px' }}>
                                    <a href="#contact">  <CommanBtn text="Meet With US" /></a>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item p={0} xs={12} sm={12} md={6} sx={{ display:{md:'flex',sm:'none',xs:'none'}, alignItems: 'center', justifyContent: { md: 'flex-end', sm: 'center', xs: 'center' } }} className='bannerImg'>
                            <Box className="imgBox">
                                <span className='img'>
                                    <img src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                </span>
                            </Box>

                            <Box className="cir2" />
                        </Grid>

                    </Grid>

                </Box>

                <Box className="cir" />


            </div>



        </>


    );
}



export default Banner;