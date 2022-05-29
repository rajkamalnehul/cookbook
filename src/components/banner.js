import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import Background from "../assets/bg.jpg";

const BannerContainer = styled("div")({
  backgroundImage: `url(${Background})`,
  width: "100%",
  height: "500px",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
});
const Banner = () => {
  return (
    <BannerContainer>
      <Typography
        sx={{ position: "absolute", top: "30%", right: "10%" }}
        fontSize={40}
        fontWeight={700}
      >
        Let's Start
        <br /> Cooking With
        <br /> Popular Recipes
      </Typography>
    </BannerContainer>
  );
};
export default Banner;
