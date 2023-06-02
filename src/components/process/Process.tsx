import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

const Process = () => {
  const boxStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
    my: { xs: "2.5em", sm: "2.5em", md: 0, lg: 0 },
  };
  const textBox = {
    width: { xs: "auto", sm: "auto", md: "50%", lg: "50%" },
    order: { xs: 2, sm: 2, md: 1, lg: 1 },
  };
  const title = {
    fontSize: { xs: "1.8em", sm: "1.8em", md: "2.5em", lg: "2.5em" },
    fontWeight: "600",
    mb: ".4em",
  };
  const desc = {
    fontSize: { xs: "1em", sm: "1em", md: "1.3em", lg: "1.3em" },
    width: "auto",
    lineHeight: "2.2em",
  };
  const imageStyles = {
    position: "relative",
    width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
    height: { xs: "170px", sm: "170px", md: "350px", lg: "350px" },
    mb: { xs: "1.3em", sm: "1.3em", md: "0", lg: "0" },
    order: { xs: 1, sm: 1, md: 2, lg: 2 },
  };
  return (
    <Box
      sx={{
        py: { xs: "2em", sm: "2em", md: "3em", lg: "3em" },
        px: { xs: "1.3em", sm: "1.3em", md: "4em", lg: "3em" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            color: "primary.main",
            fontSize: { xs: "1.5em", sm: "1.5em", md: "2em", lg: "2em" },
            textTransform: "uppercase",
          }}
        >
          process
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "2em", sm: "2em", md: "4em", lg: "4em" },
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          how does it work
        </Typography>
      </Box>
      {/* grid */}
      <Box sx={{ mt: { xs: "2em", sm: "2em", md: "6em", lg: "6em" } }}>
        {/* first box */}
        <Box sx={boxStyles}>
          <Box sx={textBox}>
            <Typography sx={title}>Look for the Service You Need</Typography>
            <Typography sx={desc}>
              Search for the rental service you need. From cars, buses, houses
              and trucks, choose what makes you feel deserved and happy. If
              you&apos;re having limitless needs, don&apos;t worry, contact us
              to have it done for you.
            </Typography>
          </Box>
          <Box sx={imageStyles}>
            <Image
              src="https://i.postimg.cc/267YwSNS/process1.png"
              alt=""
              fill={true}
              style={{ objectFit: "fill" }}
            />
            <Image
              src="https://i.postimg.cc/HkFTWNtd/process-Over-Lay.png"
              alt=""
              fill={true}
            />
          </Box>
        </Box>
        {/* second box */}
        <Box sx={boxStyles}>
          <Box
            sx={{
              ...textBox,
              order: 2,
              textAlign: { xs: "left", sm: "left", md: "right", lg: "right" },
              display: "flex",
              flexDirection: "column",
              alignItems: {
                xs: "flex-start",
                sm: "flex-start",
                md: "flex-end",
                lg: "flex-end",
              },
            }}
          >
            <Typography sx={title}>Fulfill the Requisites</Typography>
            <Typography sx={desc}>
              Fulfill the the due diligence process based on your choice by
              contacting us. Timely fulfillment is required to process all the
              necessary things from our side. All these requisites are simple
              yet easy to pass on with.
            </Typography>
          </Box>
          <Box sx={{ ...imageStyles, order: 1 }}>
            <Image
              src="https://i.postimg.cc/76kD0TcR/process2.png"
              alt=""
              fill={true}
              style={{ objectFit: "fill" }}
            />
            <Image
              src="https://i.postimg.cc/HkFTWNtd/process-Over-Lay.png"
              alt=""
              fill={true}
            />
          </Box>
        </Box>
        {/* third box */}
        <Box sx={boxStyles}>
          <Box sx={textBox}>
            <Typography sx={title}>Get Approved Immediately</Typography>
            <Typography sx={desc}>
              Get approved immmediately after the due diligence process without
              any delays. We deliver it on your request without making the
              onboarding process difficult. After approval, we will provide you
              the required customer support service.
            </Typography>
          </Box>
          <Box sx={imageStyles}>
            <Image
              src="https://i.postimg.cc/3wpYkZLp/process3.png"
              alt=""
              fill={true}
              style={{ objectFit: "fill" }}
            />
            <Image
              src="https://i.postimg.cc/HkFTWNtd/process-Over-Lay.png"
              alt=""
              fill={true}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Process;
