import { Box, Grid } from "@mui/material";
import InputField from "../InputField/InputField";
import CommanBtn from "../CommanBtn/CommanBtn";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";


import { db } from "../../firebase";

const Form = () => {



    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async (data, event) => {

        event.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "user"), {
                data
            });
            alert("Data is stored in the database")
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }




    return (

        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ width: '100%', marginTop: '0px' }}>
                    <Grid container spacing={2} >

                        <Grid item xs={12} sm={6} md={6}>
                            <InputField placeholder="Your name" type="name" label="Name" register={{ ...register("name") }} />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                            <InputField placeholder="Your email address" type="email" label="Email" register={{ ...register("email") }} />
                        </Grid>

                    </Grid>

                </Box>


                <Box sx={{ width: '100%', marginTop: '20px' }}>
                    <Grid container spacing={2} >

                        <Grid item xs={12} sm={6} md={6}>
                            <InputField placeholder="Your phone number" type="number" label="Your phone number" register={{ ...register("number") }} />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                            <InputField placeholder="Contact" type="text" label="Service Required" register={{ ...register("service") }} />
                        </Grid>

                    </Grid>

                </Box>

                <Box sx={{ width: '100%', height: '150px', marginTop: '20px' }}>
                    <Grid container   >
                        <Grid item xs={12}  >
                            <textarea name="message" type="text" cols="30" rows="10" style={{ width: '100%', height: '100%', padding: '16px 30px', border: '2px solid black', borderRadius: '5px' }} placeholder="Let us know what you need." {...register("message")}></textarea>
                        </Grid>
                    </Grid>

                </Box>
                <Box sx={{ width: { md: '30%', sm: '60%', xs: '100%' }, marginTop: '70px', height:'50px' }}>
                    <CommanBtn text="Send Message" />
                </Box>
            </form>
        </>

    );
}


export default Form;