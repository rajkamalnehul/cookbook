import { Typography } from "@mui/material";
import React from "react";
// import Catagories from "../Catagories";
import Banner from "../components/banner";
import Catagories from "../components/Catagories";

const Home = () => {
  return (
    <div style={{ marginBottom: "100px" }}>
      <Banner />
      <Catagories />
    </div>
  );
};
export default Home;
