import React from "react";
import Image from "next/image";
import { Box, Button, TextField, Typography } from "@mui/material";

const ContactUs = () => {
  const inputs = {
    width: { xs: "auto", sm: "auto", md: "450px", lg: "450px" },
  };
  const btnStyles = {
    bgcolor: "primary.main",
    color: "white",
    fontSize: { xs: "1.1em", sm: "1.1em", md: "1.2em", lg: "1.2em" },
    px: "2.6em",
    py: ".7em",
    fontWeight: "600",
    borderRadius: "0",
  };
  return (
    <Box
      id="ContactUs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: {
          xs: "flex-start",
          sm: "flex-start",
          md: "flex-start",
          lg: "center",
        },
        pt: { xs: "1em", sm: "2em", md: "2em", lg: "2.5em" },
        pb: { xs: "2em", sm: "2em", md: "2em", lg: "7em" },
        px: { xs: "1.3em", sm: "1.3em", md: "4em", lg: "6.5em" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          mb: "2em",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            color: "primary.main",
            fontSize: { xs: "1.5em", sm: "1.5em", md: "2em", lg: "2em" },
            textTransform: "uppercase",
          }}
        >
          FEEL FREE TO
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "2.5em", sm: "2.5em", md: "3.2em", lg: "3.2em" },
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          CONTACT US
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "auto",
            sm: "auto",
            md: "auto auto",
            lg: "auto auto",
          },
          gap: { xs: "2em", sm: "2em", md: "4em", lg: "4em" },
          width: { xs: "100%", sm: "100%", md: "auto", lg: "auto" },
        }}
      >
        {/* form */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "auto",
              sm: "auto",
              md: "auto auto",
              lg: "auto auto",
            },
            gap: "3em",
            overflow: "hidden",
          }}
        >
          <TextField
            sx={inputs}
            id="standard-basic"
            label="Name"
            variant="standard"
          />
          <TextField
            sx={inputs}
            id="standard-basic"
            label="Email"
            variant="standard"
          />
          <TextField
            sx={inputs}
            id="standard-basic"
            label="Phone"
            variant="standard"
          />
          <TextField
            sx={inputs}
            id="standard-basic"
            label="Subject"
            variant="standard"
          />
          <TextField
            sx={{ width: { xs: "auto", sm: "auto", md: "auto", lg: "220%" } }}
            multiline
            rows={6}
            id="standard-basic"
            label="Message"
            variant="standard"
          />
          <Button
            variant="contained"
            sx={{
              ...btnStyles,
              display: { xs: "block", sm: "block", md: "none", lg: "none" },
              width: "fit-content",
              mx: "auto",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            CONTACT US
          </Button>
        </Box>
        {/* image */}
        <Box
          sx={{
            position: "relative",
            width: { xs: "auto", sm: "auto", md: "auto", lg: "500px" },
            height: { xs: "320px", sm: "320px", md: "200px", lg: "500px" },
          }}
        >
          <Image
            src="https://i.postimg.cc/50Mh6VPL/contact-Us.png"
            alt=""
            fill={true}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          width: { xs: "auto", sm: "auto", md: "auto", lg: "89%" },
        }}
      >
        <Button
          variant="contained"
          sx={{
            ...btnStyles,
            display: { xs: "none", sm: "none", md: "block", lg: "block" },
          }}
        >
          CONTACT US
        </Button>
      </Box>
    </Box>
  );
};

export default ContactUs;
