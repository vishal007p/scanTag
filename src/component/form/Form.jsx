import { Alert, Box, Grid, Snackbar } from "@mui/material";
import InputField from "../InputField/InputField";
import CommanBtn from "../CommanBtn/CommanBtn";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useState } from "react";


const Form = () => {

    const [EmailMessage, setEmailMessage] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data, event) => {

        event.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "user"), {
                data
            });
            setEmailMessage(true)
            setTimeout(() => {
                setEmailMessage(false)
            }, 6000)

        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }



    return (

        <>
            <form onSubmit={handleSubmit(onSubmit)} id="contact">
                <Box sx={{ width: '100%', marginTop: '0px' }}>
                    <Grid container spacing={2} >

                        <Grid item xs={12} sm={6} md={6}>
                            <InputField placeholder="Name" type="name" label="Name" register={{ ...register("name") }} />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                            <InputField placeholder="Email" type="email" label="Email" register={{ ...register("email") }} />
                        </Grid>

                    </Grid>

                </Box>


                <Box sx={{ width: '100%', marginTop: '20px' }}>
                    <Grid container spacing={2} >

                        <Grid item xs={12} sm={6} md={6}>
                            <InputField placeholder="Number" type="number" label="Your Phone Number" register={{ ...register("number") }} />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                            <InputField placeholder="Service" type="text" label="Service Required" register={{ ...register("service") }} />
                        </Grid>

                    </Grid>

                </Box>

                <Box sx={{ width: '100%', height: '150px', marginTop: '20px' }}>
                    <Grid container   >
                        <Grid item xs={12}  >
                            <textarea name="message" type="text" cols="30" rows="10" style={{ width: '100%', height: '100%', padding: '16px 30px', border: '2px solid black', borderRadius: '5px' }} placeholder="Let us know what you need." {...register("message", { required: true, minLength: 20 })} />
                            {errors.message?.type === "required" && (
                                <p style={{ color: 'red', margin: '20px 0px' }} role="alert">hi</p>
                            )}
                        </Grid>
                    </Grid>

                </Box>
                <Box sx={{ width: { md: '30%', sm: '60%', xs: '100%' }, marginTop: '90px', height: '50px' }}>
                    <CommanBtn text="Send" />
                </Box>
            </form>
            <Box sx={{ marginTop: '20px' }}>
                <Snackbar open={EmailMessage} autoHideDuration={6000}  >
                    <Alert severity="success">Sent Successfully</Alert>
                </Snackbar>
            </Box>
        </>

    );
}


export default Form;