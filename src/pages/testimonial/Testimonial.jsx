import { Box } from "@mui/material";
import TestimonialCard from "../../component/TestimonialCard/TestimonialCard";


const Testimonial = () => {
    return (


        <>

            <Box sx={{ width: '100%', margin: 'auto', paddingTop: '60px', paddingBottom: { md: '100px', sm: '20px', xs: '20px' }, backgroundColor: '#525CEB' }}>

                <Box sx={{ width: { md: '60%', sm: '100%', xs: '100%' }, margin: 'auto' }}>
                    <h6 style={{ textAlign: 'center', color: '#F4CE14', fontSize: '1.6rem' }}>Testimonial</h6>
                    <h2 style={{ textAlign: 'center', fontSize: '3rem', color: 'white', marginTop: '20px' }}>Our Testimonial</h2>

                    <TestimonialCard />
                </Box>


            </Box>

        </>


    );
}



export default Testimonial;