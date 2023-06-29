import { Box, Grid } from "@mui/material";
import InputField from "../InputField/InputField";
import CommanBtn from "../CommanBtn/CommanBtn";

const Form = () => {
    return (

        <>

            <Box sx={{ width: '100%', marginTop: '0px' }}>
                <Grid container spacing={2} >

                    <Grid item xs={6}>
                        <InputField placeholder="Your name" label="Name" />
                    </Grid>

                    <Grid item xs={6}>
                        <InputField placeholder="Your email address" label="Email" />
                    </Grid>

                </Grid>

            </Box>


            <Box sx={{ width: '100%', marginTop: '20px' }}>
                <Grid container spacing={2} >

                    <Grid item xs={6}>
                        <InputField placeholder="Your name" label="Name" />
                    </Grid>

                    <Grid item xs={6}>
                        <InputField placeholder="Your email address" label="Email" />
                    </Grid>

                </Grid>

            </Box>

            <Box sx={{ width: '100%',height:'150px', marginTop: '20px' }}>
                <Grid container   >
                    <Grid item xs={12}  >
                        <InputField placeholder="Your name" />
                    </Grid>
                </Grid>

            </Box>
            <Box sx={{width:'30%'}}>
                <CommanBtn text="Sand Message"/>
            </Box>
        </>

    );
}


export default Form;