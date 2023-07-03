

import { Box, Grid, Typography } from '@mui/material';
import '../../styles/index.scss';
import CommanBtn from '../CommanBtn/CommanBtn';


const Banner = () => {
    return (

        <>

            <div className='bannerContainer'>
                <Box sx={{ width: 'min(1420px , 95%)', margin: 'auto' }} className='bannerMain'>

                    <Grid container spacing={4} className='bannerContent'>
                        <Grid item p={0} xs={12} sm={12} md={6}   >
                            <Box sx={{ marginTop: '100px', display: 'flex', alignItems: { md: 'flex-start', sm: 'center', xs: 'center' }, justifyContent: 'center', flexDirection: 'column' }}>
                                <h2 style={{ fontSize: '1.4rem', color: 'white', textAlign: { md: 'left', sm: 'center', xs: 'center' } }}>EMPOWER YOUR BUSINESS</h2>

                                <Typography variant='h1' sx={{ color: 'white', fontWeight: 'bold', fontSize:{md:'4rem',sm:'2rem',xs:'2rem'}, marginTop: '30px' ,textAlign:{md:'left',sm:'center',xs:'center'} }}>Excellent IT services for your success</Typography>
                                <Box sx={{ marginTop: '50px', width: '40%', height: '60px' }}>
                                    <CommanBtn text="Meet With US" />
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item p={0} xs={12} sm={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: { md: 'flex-end', sm: 'center', xs: 'center' } }} className='bannerImg'>
                            <Box className="imgBox">
                                <img src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
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