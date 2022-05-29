import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function Cards(props) {
  const { img, tittle, desc } = props;

  return (
    <div>
      <Link
        style={{ textDecoration: "none" }}
        to={{
          pathname: `/recepies/${tittle}`,
        }}
        state={{ bannerImage: img, bannerDesc: desc, bannerTittle: tittle }}
      >
        <Card
          sx={{
            maxWidth: 345,
            margin: "15px",
            minWidth: "max-content",
            backgroundColor: "#ededed",
            cursor: "pointer",
            ":hover": {
              transform: "scale(1.1)",
              transition: "0.2s ease-out",
            },
          }}
        >
          <CardMedia component="img" height="140" image={img} alt={tittle} />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "darkslategray" }}
              textAlign={"center"}
            >
              {tittle}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}

export default Cards;
