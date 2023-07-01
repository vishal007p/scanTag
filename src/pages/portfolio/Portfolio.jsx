import { Box } from "@mui/material";
import SliderTwo from "../../component/Slider/SliderTwo";

const Portfolio = () => {
    return (

        <>

            <Box sx={{  display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>


                <h6 style={{ color: '#00C3D4',fontSize:'1.5rem', }}>Portfolio</h6>

                <h1 style={{ color: 'white',fontSize:'3rem', marginTop:'20px' }}>Our PortfOlio</h1>


            </Box>

            <Box sx={{marginTop:'100px' ,marginBottom:'100px'}}>
                <SliderTwo />

            </Box>

        </>


    );
}



export default Portfolio;