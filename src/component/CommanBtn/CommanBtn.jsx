import { Button } from "@mui/material";

const CommanBtn = ({ link, text }) => {
  return (
    <>
      <Button
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "#00C3D4",
          borderRadius: "5px",
          color: "white",
          fontSize:'1rem',
          fontWeight:'600',
          ":hover": { backgroundColor: "#00C3D4" },
        }}
      >
        <a href={link}></a>
        {text}
      </Button>
    </>
  );
};

export default CommanBtn;
