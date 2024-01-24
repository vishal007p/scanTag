import { Box } from "@mui/material";
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Img2 from '../../assets/img2.png'
import CommanBtn from "../../component/CommanBtn/CommanBtn";
import Proc from '../../assets/proc.png'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    height: '120px',
    width: '140px',
    color: theme.palette.text.secondary,
    display: 'flex',
    alignItems: 'center', justifyContent: 'center'
}));

const Contact = () => {
    return (
        <>
            <Box className="contactUs">

                <h3 style={{color:'white',fontSize:'3rem',marginBottom:'60PX'}}>Process We Follow</h3>
                <Box sx={{ width: { md: '60%', sm: '90%', xs: '90%' }, display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                    <img src={Proc} alt=""  style={{width:'100%', height:'100%'}}/>
                </Box>



            </Box>
        </>
    );
}


export default Contact;