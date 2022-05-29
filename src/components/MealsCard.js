import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/system";
import { Avatar } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

const MealsStyledContainer = styled("div")({
  width: "100%",
  backgroundColor: "#ededed",
  // padding: "0 6px 6px 6px",
  borderRadius: "5px",
  marginTop: "20px",
});

const MealsStyledCard = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  // width: "100%",
  alignItems: "center",
  padding: "12px 12px 12px 12px",
});

function MealsCard(props) {
  const { img, id, mealName, loader } = props;

  return (
    <MealsStyledContainer>
      {loader ? <LinearProgress /> : <div></div>}

      <MealsStyledCard>
        <Avatar sx={{ width: 80, height: 80 }} alt="Remy Sharp" src={img} />
        <Typography
          gutterBottom
          variant="p"
          component="div"
          sx={{ color: "darkslategray", padding: "5px", flex: 1 }}
          ml={2}
        >
          {mealName}
        </Typography>
        <div>
          <ArrowForwardIosIcon
            onClick={props.onClick}
            sx={{ cursor: "pointer" }}
          />
        </div>
      </MealsStyledCard>
    </MealsStyledContainer>
  );
}

export default MealsCard;
