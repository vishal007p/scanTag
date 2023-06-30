import { Box, Grid } from "@mui/material";
import ServiceCard from "../../component/serviceCard/ServiceCard";
import OutlineBtn from "../../component/CommanBtn/OutlineBtn";
import Img from "../../assets/img1.png";
 



const services = [
    {
        name: 'Mobile',
        img:'../../assets/img1.png'
    },
    {
        name: 'FRONTEND',
        img:'../../assets/img1.png'
    },
    {
        name: 'BACKEND',
        img:'../../assets/img1.png'
    },
    {
        name: 'PROTOTYING',
        img:'../../assets/img1.png'
    },
    {
        name: 'CMS',
        img:'../../assets/img1.png'
    },


]


const Services = () => {
    return (

        <>

            <Box sx={{ width: '100%', backgroundColor: '#00C3D4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', position: 'relative', zIndex: '999' ,height:{md:'350px',sm:'100%',xs:'100%'},padding:'20px'}}>


                <Box sx={{ width: { md: '60%', sm: '90%', xs: '90%' }, marginTop: { xs: '0px', sm: '0px', md: '-70px' }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                        {
                            services.map((data, i) => (


                                <Grid item xs={12} sm={4} md={2} key={i}  >

                                    <ServiceCard text={data.name} img={Img} />

                                </Grid>
                            ))
                        }


                    </Grid>

                </Box>

                <Box sx={{ width: { md: '60%', sm: '90%', xs: '90%' }, margin: 'auto', paddingTop: '30px' }}>
                    <Grid container>
                        <Grid xs={12} sm={6} md={6}>
                            <h1 style={{ color: 'white', fontSize: '2.1rem' }}>Preparing for your success trusted source in IT services</h1>

                        </Grid>
                        <Grid xs={12} sm={6} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <Box sx={{ width: { md: '40%', sm: '90%', xs: '100%' }, height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <OutlineBtn text="View All Services" />
                                
                            </Box>
                        </Grid>

                    </Grid>

                </Box>


            </Box>
 
        </>

    );
}


export default Services;