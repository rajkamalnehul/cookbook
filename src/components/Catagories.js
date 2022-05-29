import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import Container from "@mui/material/Container";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { Divider, Typography } from "@mui/material";

const ContentWrapper = styled(Container)({
  margin: "auto",
});

const Carousel = styled("div")({
  marginTop: "8px",
  color: "darkslategray",
  backgroundColor: "white",
  padding: 8,
  display: "flex",
  overflowY: "auto",
  maxWidth: "100%",
});

function Catagories() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    let url = "https://www.themealdb.com/api/json/v1/1/categories.php";
    axios
      .get(url)
      .then(function (response) {
        // handle success
        setCategory(response.data.categories);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <ContentWrapper maxWidth="lg">
      <Typography textAlign="center" my={2} fontWeight={700} fontSize={20}>
        Categories
      </Typography>
      <Divider variant="middle" />
      <Container maxWidth="xl">
        <Box display={"flex"} flexWrap="wrap" justifyContent="center">
          {category?.map((item, index) => (
            <Cards
              key={index}
              img={item.strCategoryThumb}
              tittle={item.strCategory}
              desc={item.strCategoryDescription}
            />
          ))}
        </Box>
      </Container>
    </ContentWrapper>
  );
}

export default Catagories;
