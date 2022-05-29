import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Container from "@mui/material/Container";
import MealsCard from "../components/MealsCard";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { display, styled } from "@mui/system";
import { useLocation } from "react-router-dom";

const ScrolableContainer = styled("div")({
  overflowY: "scroll",
  height: "50%",
  scrollbarColor: "#6b6b6b #2b2b2b",
  "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
    backgroundColor: "#ededed",
    width: "6px",
  },
  "&::-webkit-scrollbar-track": {
    background: "white",
  },
  "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
    borderRadius: 8,
    backgroundColor: "#ededed",
    minHeight: 8,
    width: "10px",
  },
  "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
    backgroundColor: "#ededed",
  },
  "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
    backgroundColor: "#ededed",
  },
  "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "#ededed",
  },
  "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
    backgroundColor: "#ededed",
  },
  "@media (maxWidth:500px)": {
    height: "100%",
  },
});

const ModalContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "white",
  backgroundColor: "white",
  boxShadow: 24,
  padding: "5px",
  maxHeight: "90vh",
  overflow: "hidden",
  "@media (max-width: 768px)": {
    overflow: "auto",
  },
});

const CardContainer = styled("div")({
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  width: "40%",
  "@media (max-width: 800px)": {
    width: "100%",
  },
});
const BannerContainer = styled("div")({
  boxSizing: "border-box",
  backgroundColor: "#f5f5f5",
  width: "100%",
  minHeight: "300px",
  marginBottom: "100px",
  display: "flex",
  justifyContent: "space-between",
  padding: "50px",
  "@media (max-width: 500px)": {
    flexDirection: "column",
    padding: "15px",
  },
});
function Recepies() {
  const { category } = useParams();
  const [meals, setMeals] = useState([]);
  const [mealId, setMealId] = useState("");
  const [open, setOpen] = useState(false);
  const [recepies, setRecepies] = useState([]);
  let location = useLocation();

  useEffect(() => {
    console.log(location);
    let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
    axios
      .get(url)
      .then(function (response) {
        // handle success
        console.log(response.data.meals);
        setMeals(response.data.meals);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const handleOpen = (id) => {
    setMealId(id);
    let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    axios
      .get(url)
      .then(function (response) {
        // handle success
        console.log(response.data.meals);
        setOpen(true);
        setMealId(null);
        setRecepies(response.data.meals);
      })
      .catch(function (error) {
        // handle error
        setOpen(false);
        setMealId(null);
      });

    console.log(id);
  };

  return (
    <Container maxWidth="xl" sx={{ paddingTop: "24px", paddingBottom: "24px" }}>
      <BannerContainer bg={location?.state?.bannerImage}>
        <img
          src={location?.state?.bannerImage}
          style={{ objectFit: "contain" }}
        />
        <div
          style={{
            width: "100%",
            maxWidth: "500px",
            "@media (maxWidth:500px)": {
              width: "100%",
            },
          }}
        >
          <Typography
            variant="h1"
            fontSize={36}
            fontWeight={600}
            color="darkslategray"
          >
            {location.state?.bannerTittle}
          </Typography>
          <Typography mt={2} color="darkslategray">
            {location.state?.bannerDesc}
          </Typography>
        </div>
      </BannerContainer>
      <Grid container spacing={4}>
        {meals?.map((item, index) => (
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            key={index}
            sx={{ paddingTop: "0 !important" }}
          >
            <MealsCard
              mealName={item.strMeal}
              id={item.idMeal}
              img={item.strMealThumb}
              onClick={() => handleOpen(item.idMeal)}
              loader={mealId == item.idMeal}
            />
          </Grid>
        ))}
      </Grid>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContainer>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={6} sx={{ padding: "0 !important" }}>
              <img
                src={recepies.length ? recepies[0].strMealThumb : ""}
                style={{ objectFit: "contain", width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6} style={{ padding: "40px" }}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                fontWeight={600}
              >
                {recepies.length ? recepies[0].strMeal : ""}
              </Typography>
              <ScrolableContainer>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {recepies.length ? recepies[0].strInstructions : ""}
                </Typography>
              </ScrolableContainer>
            </Grid>
          </Grid>
        </ModalContainer>
      </Modal>
    </Container>
  );
}

export default Recepies;
