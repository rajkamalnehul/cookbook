import React from "react";
import Logo from "../assets/logo.png";
import Menu from "../assets/align-left.svg";
import { Container, styled } from "@mui/system";

const HeaderWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  width: "60%",
});

const Header = () => {
  return (
    <Container component={Container}>
      <HeaderWrapper>
        <img src={Menu} />
        <div>
          <img src={Logo} />
        </div>
      </HeaderWrapper>
    </Container>
  );
};
export default Header;
