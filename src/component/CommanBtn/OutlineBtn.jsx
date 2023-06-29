import { Button } from "@mui/material";

const OutlineBtn = ({ text }) => {
    return (

        <>

            <Button sx={{ width: '100%', height: '100%', border: '1px solid white', color: 'white', borderRadius: '5px' }}>

                {
                    text
                }
            </Button>
        </>


    );
}



export default OutlineBtn;