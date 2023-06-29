import { Box } from "@mui/material";

const InputField = ({placeholder,label}) => {
  return (
    <>
      <Box sx={{ width: "100%",    }}>
        <Box sx={{width:'100%'  }}>
          <label htmlFor="">{label}</label>
        </Box>
        <Box sx={{ width: "100%" }}>
          <input
            type="text"
            placeholder={placeholder}
            style={{
              width: "100%",
              height: "100%",
              padding: "16px 30px",
              borderRadius: "5px",
              border: "2px solid black",
              marginTop:'10px'
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default InputField;
