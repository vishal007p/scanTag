
import { Box } from "@mui/material";

const ServiceCard = ({ text, img }) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          margin: 'auto',
          height: "150px",
          display: "flex",
          alignItems: "center",
          justifyContent: 'space-around',
          backgroundColor: "white",
          borderRadius: '10px',
          flexDirection: 'column',
          overflow: 'hidden'


        }}
      >
        <img src={img} alt="" style={{ width: '50%', height: '50%' }} />
        <h4>{text}</h4>
      </Box>
    </>
  );
};

export default ServiceCard;
