 
import { Box } from "@mui/material";

const ServiceCard = ({text}) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          margin:'auto',
          height: "150px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          borderRadius:'10px',
       
        }}
      >
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUwkyE9utt8pGYnpxAxuOkeh_YZBpsMvwkLQ&usqp=CAU" alt="" /> */}

        <h4>{text}</h4>
      </Box>
    </>
  );
};

export default ServiceCard;
