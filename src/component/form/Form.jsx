import { Box, Grid } from "@mui/material";
import InputField from "../InputField/InputField";
import CommanBtn from "../CommanBtn/CommanBtn";

const Form = () => {
    return (

        <>

            <Box sx={{ width: '100%', marginTop: '0px' }}>
                <Grid container spacing={2} >

                    <Grid item xs={12}  sm={6} md={6}>
                        <InputField placeholder="Your name" label="Name" />
                    </Grid>

                    <Grid item xs={12}  sm={6} md={6}>
                        <InputField placeholder="Your email address" label="Email" />
                    </Grid>

                </Grid>

            </Box>


            <Box sx={{ width: '100%', marginTop: '20px' }}>
                <Grid container spacing={2} >

                    <Grid item xs={12}  sm={6} md={6}>
                        <InputField placeholder="Your name" label="Name" />
                    </Grid>

                    <Grid item xs={12}  sm={6} md={6}>
                        <InputField placeholder="Your email address" label="Email" />
                    </Grid>

                </Grid>

            </Box>

            <Box sx={{ width: '100%',height:'150px', marginTop: '20px' }}>
                <Grid container   >
                    <Grid item xs={12}  >
                     <textarea name="" id="" cols="30" rows="10" style={{width:'100%',height:'100%',padding:'16px 30px',border:'2px solid black',borderRadius:'5px'}} placeholder="Let us know what you need."></textarea>
                    </Grid>
                </Grid>

            </Box>
            <Box sx={{width:{md:'30%',sm:'60%', xs:'100%'},marginTop:'70px'}}>
                <CommanBtn text="Sand Message"/>
            </Box>
        </>

    );
}


export default Form;