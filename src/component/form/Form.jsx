import {   Box, Grid,   } from "@mui/material";
import InputField from "../InputField/InputField";
import CommanBtn from "../CommanBtn/CommanBtn";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

const Form = () => {

    

    const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault();

        emailjs.sendForm('service_r28dvcv', 'template_eiz7269', form.current, 'Sfihe_gTwoyjl3Y-Q')
            .then((result) => {
                console.log(result.text);

                alert("Sent Successfully")
            }, (error) => {
                console.log(error.text);

                alert("error")
            });
    };

    
    return (

        <>
            <form ref={form} onSubmit={sendEmail} id="contact">
                <Box sx={{ width: '100%', marginTop: '0px' }}>
                    <Grid container spacing={2} >

                        <Grid item xs={12} sm={6} md={6}>
                            <InputField placeholder="Name" type="name" label="Name"  name="name"  />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                            <InputField placeholder="Email" type="email" label="Email"  name="mail"  />
                        </Grid>

                    </Grid>

                </Box>


                <Box sx={{ width: '100%', marginTop: '20px' }}>
                    <Grid container spacing={2} >

                        <Grid item xs={12} sm={6} md={6}>
                            <InputField placeholder="Number" type="number"  name="number" label="Your Phone Number"   />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                            <InputField placeholder="Service" type="text"  name="service" label="Service Required"   />
                        </Grid>

                    </Grid>
        
                </Box>

                <Box sx={{ width: '100%', height: '150px', marginTop: '20px' }}>
                    <Grid container   >
                        <Grid item xs={12}  >
                            <textarea name="message" type="text" cols="30" rows="10" style={{ width: '100%', height: '100%', padding: '16px 30px', border: '2px solid black', borderRadius: '5px' }} placeholder="Let us know what you need."   />
                        </Grid>
                    </Grid>

                </Box>
                <Box sx={{ width: { md: '30%', sm: '60%', xs: '100%' }, marginTop: '90px', height: '50px' }}>
                    <CommanBtn text="Send" />
                </Box>
            </form>
       
        </>

    );
}


export default Form;