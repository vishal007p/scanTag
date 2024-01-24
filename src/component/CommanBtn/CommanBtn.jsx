import { Button } from "@mui/material";

const CommanBtn = ({ link, text, type }) => {
  return (
    <>
      <Button
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "#F4CE14",
          borderRadius: "5px",
          color: "black",
          fontSize:'1rem',
          fontWeight:'600',
          ":hover": { backgroundColor: "#F4CE14" },
        }}
        type="submit"
      >
        <a href={link}></a>
        {text}
      </Button>
    </>
  );
};

export default CommanBtn;
