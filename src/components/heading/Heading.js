import React from "react";
import { styled } from "@glitz/react";

export const Heading = (props) => {
  return (
    <HeaderStyled
      css={{
        fontSize: props.xlarge ? "24px" : "18px",
      }}
    >
      <HeaderContainer>
        <Logo>Where in the world?</Logo>
        <ModeSwitcher>🌑 Dark Mode</ModeSwitcher>
      </HeaderContainer>
    </HeaderStyled>
  );
};

export const HeaderStyled = styled.div({
  backgroundColor: "hsl(0, 0%, 100%)",
  boxShadow: "0 2px 6px 0px rgba(0, 0, 0, .1)",
  padding: {
    y: 25,
    x: 0,
  },
});

const HeaderContainer = styled.div({
  width: 1440,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: {
    y: 0,
    x: 40,
  },
  margin: {
    x: "auto",
    y: 0,
  },
  color: "hsl(200, 15%, 8%)",
});

const Logo = styled.div({
  fontWeight: 800,
  fontSize: 24,
});

const ModeSwitcher = styled.div({
  fontWeight: 600,
  fontSize: 16,
});

// export const headerLayout = styled({
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   backgroundColor: "hsl(0, 0%, 100%)",
//   boxShadow: "0 2px 6px 0px rgba(0, 0, 0, .1)",
//   padding: {
//     y: 25,
//     x: 100,
//   },
// });

// export const HeadingStyle = styled.div(headerLayout);
