import React from "react";
import styled from "styled-components";
import ImageHeader from "../photo1.png";

export const ContainerText = styled.div`
  text-align: left;
  max-width: 592px;
`;

export const Title = styled.p`
  font-family: Playfair Display;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 64px;
  color: #000000;

  @media (max-width: 700px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const SubTitle = styled.p`
  font-family: Montserrat;
  font-style: italic;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #4f4f4f;
`;

export const Image = styled.img`
  max-height: 470px;
  max-width: 969px;
  margin-top: 30px;

  @media (max-width: 700px) {
    margin: 0px;
    max-width: 100%;
  }
`;

const Header = () => {
  return (
    <>
      <ContainerText>
        <Title>Classic Cheesecake Recipe</Title>
        <SubTitle>
          Look no further for a creamy and ultra smooth classic cheesecake
          recipe! Paired with a buttery graham cracker crust, no one can deny
          its simple decadence. For the best results, bake in a water bath.
        </SubTitle>
      </ContainerText>
      <Image src={ImageHeader} alt="ImageHeader" />
    </>
  );
};

export default Header;
