import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Ingredients from "./components/Ingredients";
import Yields from "./components/Yields";

export const Container = styled.header`
  min-height: 100vh;
  display: grid;
  justify-content: center;
  grid-template-columns: 40% 2% 15%;
  grid-gap: 10px;
  grid-template-areas:
    "header header header header"
    "main . sidebar sidebar"
    "footer footer footer footer";

  @media (max-width: 700px) {
    grid-template-columns: 100%;
    grid-gap: 0px;
    margin: 12px;
    grid-template-areas:
      "header"
      "sidebar"
      "main"
      "footer";
  }
`;

export const GridHeader = styled.div`
  grid-area: header;
`;

export const GridIngredients = styled.div`
  grid-area: main;
`;

export const GridYields = styled.div`
  grid-area: sidebar;
`;

export const Footer = styled.div`
  grid-area: footer;
  height: 50px;
  text-align: center;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #a9a9a9;
`;

const RecipePage = () => {
  return (
    <Container>
      <GridHeader>
        <Header />
      </GridHeader>
      <GridIngredients>
        <Ingredients />
      </GridIngredients>
      <GridYields>
        <Yields />
      </GridYields>
      <Footer>
        <p>Lorraine @ DevChallenges.io</p>
      </Footer>
    </Container>
  );
};

export default RecipePage;
