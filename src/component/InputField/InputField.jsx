import { Box, InputBase,   } from "@mui/material";

const InputField = ({placeholder,label, register,type}) => {
  return (
    <>
      <Box sx={{ width: "100%",    }}>
        <Box sx={{width:'100%'  }}>
          <label htmlFor="">{label}</label>
        </Box>
        <Box sx={{ width: "100%" }}>
          <InputBase
            type={type}
            placeholder={placeholder}
            style={{
              width: "100%",
              height: "100%",
              padding: "16px 30px",
              borderRadius: "5px",
              border: "2px solid #282828",
              marginTop:'10px'
            
            }}
            {...register}
           
          />
        </Box>
      </Box>
    </>
  );
};

export default InputField;
