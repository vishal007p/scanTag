import { Box, Grid, Typography } from "@mui/material";
import ServiceCard from "../../component/serviceCard/ServiceCard";
import OutlineBtn from "../../component/CommanBtn/OutlineBtn";
import Mobile from "../../assets/Mobile.png";
import Frontend from '../../assets/Frontend.png'
import Backend from '../../assets/Backend.png';
import Prototyping from '../../assets/Prototyping.png';
import Design from '../../assets/Design.png'



 


const Services = () => {
    return (

        <>

            <Box sx={{ width: '100%', backgroundColor: '#525CEB', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', position: 'relative', zIndex: '999', height: { md: '250px', sm: '100%', xs: '100%' }, padding: '20px' }}>


                <Box sx={{ width: { md: '75%', sm: '90%', xs: '100%' }, marginTop: { xs: '0px', sm: '0px', md: '-70px' }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >



                        <Grid item xs={6} sm={4} md={2}   >

                            <ServiceCard text="Mobile" img={Mobile} />

                        </Grid>

                        <Grid item xs={6} sm={4} md={2}   >

                            <ServiceCard text="Frontend" img={Frontend} />

                        </Grid>

                        <Grid item xs={6} sm={4} md={2}   >

                            <ServiceCard text="Backend" img={Backend} />

                        </Grid>

                        <Grid item xs={6} sm={4} md={2}   >

                            <ServiceCard text="Prototyping" img={Prototyping} />

                        </Grid>

                        <Grid item xs={12} sm={4} md={2}  >

                            <ServiceCard text="Design" img={Design} />

                        </Grid>


                    </Grid>

                </Box>

                <Box sx={{ width: { md: '75%', sm: '90%', xs: '100%' }, margin: 'auto', paddingTop: '30px' }}>
                    <Grid container  >
                        <Grid xs={12} >
                            <Typography variant="h1"  sx={{ color: 'white', fontSize: '2.1rem' ,textAlign:'center', width:{md:'40%',sm:'100%',xs:'100%'},margin:'auto',fontWeight:'bold'}}>Preparing for your success trusted  source in IT services</Typography>

                        </Grid>
                       

                    </Grid>

                </Box>


            </Box>

        </>

    );
}


export default Services;