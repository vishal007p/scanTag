

import { Box, Grid } from '@mui/material';
import '../../styles/index.scss';
import CommanBtn from '../CommanBtn/CommanBtn';


const Banner = () => {
    return (

        <>

            <div className='bannerContainer'>
                <Box sx={{ width: 'min(1420px , 95%)', margin: 'auto' }} className='bannerMain'>

                    <Grid container spacing={4} className='bannerContent'>
                        <Grid item p={0} xs={12} sm={12} md={6}   >
                            <Box sx={{ marginTop: '100px' }}>
                                <h2 style={{ fontSize: '1.4rem', color: 'white' }}>EMPOWER YOUR BUSINESS</h2>
                                <h1 style={{ fontSize: '4rem', marginTop: '30px', color: 'white' }}>Excellent IT services for your success</h1>
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

                <Box className="cir">

                </Box>
            </div>



        </>


    );
}



export default Banner;