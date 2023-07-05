import { Box, Grid } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Logo from "../.././assets/logo.png";
import WhereToVoteIcon from "@mui/icons-material/WhereToVote";
import NearMeIcon from "@mui/icons-material/NearMe";

const Footer = () => {
  return (
    <>
      <Box className="footer">
        <Box
          sx={{ width: { md: "80%", sm: "90%", xs: "90%" }, margin: "auto" }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4} md={4}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  borderRight: {
                    md: "1px solid white",
                    sm: "none",
                    xs: "none",
                  },
                  padding: { md: "20px", sm: "0px", xs: "0px" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: { md: "20px", sm: "20px", xs: "20px" },
                  }}
                >
                  <CallIcon
                    sx={{
                      color: "#00C3D4",
                      fontSize: "2.5rem",
                      backgroundColor: "white",
                      borderRadius: "50%",
                      padding: "6px",
                    }}
                  />
                </Box>
                <Box>
                  <span style={{ color: "white", fontSize: "1.2rem" }}>
                    Call Us
                  </span> <br />
                  <h6
                    style={{
                      color: "white",
                      fontSize: "1.1rem",
                      marginTop: "5px",
                    }}
                  >
                   +91 8460039457
                  </h6>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4} md={4}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  borderRight: {
                    md: "1px solid white",
                    sm: "none",
                    xs: "none",
                  },
                  padding: { md: "20px", sm: "0px", xs: "0px" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "20px",
                  }}
                >
                  <EmailIcon
                    sx={{
                      color: "#00C3D4",
                      fontSize: "2.5rem",
                      backgroundColor: "white",
                      borderRadius: "50%",
                      padding: "6px",
                    }}
                  />
                </Box>
                <Box>
                  <span style={{ color: "white", fontSize: "1.2rem" }}>
                    Write to Us
                  </span> <br />
                  <h6
                    style={{
                      color: "white",
                      fontSize: "1.1rem",
                      marginTop: "5px",
                    }}
                  >
                  abhishek@scan-tag.com
                  </h6>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4} md={4}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: "100%",
                  padding: { md: "20px", sm: "0px", xs: "0px" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "20px",
                  }}
                >
                  <AccessTimeIcon
                    sx={{
                      color: "#00C3D4",
                      fontSize: "2.5rem",
                      backgroundColor: "white",
                      borderRadius: "50%",
                      padding: "6px",
                    }}
                  />
                </Box>
                <Box>
                  <span style={{ color: "white", fontSize: "1.2rem" }}>
                    Office hours
                  </span> <br />
                  <h6
                    style={{
                      color: "white",
                      fontSize: "1.1rem",
                      marginTop: "5px",
                    }}
                  >
                    Mon-Sat 9:00 - 7:00
                  </h6>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            width: { md: "80%", sm: "90%", xs: "90%" },
            margin: "60px auto",
          }}
        >
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                  padding: { md: "20px", sm: "0px", xs: "0px" },
                }}
              >
                <img src={Logo} alt="" style={{ width: "80%" }} />

                <p style={{ color: "white", marginTop: "20px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    marginTop: "20px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "20px",
                    }}
                  >
                    <WhereToVoteIcon
                      sx={{
                        color: "#00C3D4",
                        fontSize: "2.5rem",
                        backgroundColor: "white",

                        borderRadius: "50%",
                        padding: { md: "5px", sm: "0px", xs: "0px" },
                      }}
                    />
                  </Box>
                  <Box>
                    <h6
                      style={{
                        color: "white",
                        fontSize: "1.1rem",
                        marginTop: "5px",
                      }}
                    >
                      1791 Yorkshire Circle Kitty Hawk, NC 279499
                    </h6>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={6} sm={3} md={2}>
              <Box sx={{ padding: { md: "20px", sm: "0px", xs: "0px" } }}>
                <h6 style={{ color: "white", fontSize: "1.3rem" }}>
                  Page Links
                </h6>

                <ul
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    flexDirection: "column",
                    gap: "20px",
                    color: "white",
                  }}
                >
                  <li>Home</li>
                  <li>Services</li>
                  <li>Portfolio</li>
                  <li>Blog</li>
                  <li>Page</li>
                </ul>
              </Box>
            </Grid>

            <Grid item xs={6} sm={3} md={2}>
              <Box sx={{  }}>
                <h6 style={{ color: "white", fontSize: "1.3rem" }}>Explore</h6>

                <ul
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    flexDirection: "column",
                    gap: "20px",
                    color: "white",
                  }}
                >
                  <li>Our Scientists</li>
                  <li>Our Services</li>
                  <li>Testimonials</li>
                  <li>SaaS Solutions</li>
                  <li>Case Studies</li>
                </ul>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ padding: "20px 0px" }}>
                <h6 style={{ color: "white", fontSize: "1.2rem" }}>
                  Newsletter
                </h6>

                <p
                  style={{
                    fontSize: "1.2rem",
                    color: "white",
                    marginTop: "30px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                </p>

                <Box
                  sx={{
                    padding: "10px",
                    marginTop: "40px",
                    width: "100%",
                    border: "1px solid #00C3D4",
                    borderRadius: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <Box>
                    <input
                      type="text"
                      style={{ background: "none", border: "none" }}
                      placeholder="Your Email Address"
                    />
                  </Box>
                  <Box>
                    <NearMeIcon
                      sx={{
                        padding: "8px",
                        color: "#00C3D4",
                        background: "white",
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        fontSize: "2rem",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
