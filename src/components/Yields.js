import React from "react";
import styled from "styled-components";

export const ContainerText = styled.div`
  float: right;
  margin-top: 30px;
  padding: 40px;
  width: 216px;
  left: 984px;
  top: 711px;
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);
  border-radius: 12px;

  @media (max-width: 700px) {
    display: contents;
    box-shadow: none;
    border-radius: 0px;
    width: 100%;
  }
`;

export const Title = styled.p`
  font-family: Montserrat;
  font-style: normal;
  text-align: left;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
  color: #bdbdbd;
`;

export const SubtitleOrange = styled.p`
  font-family: Montserrat;
  margin-top: -8px;
  font-style: normal;
  text-align: left;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #f2994a;
`;

export const Subtitle = styled.p`
  font-family: Montserrat;
  font-style: normal;
  text-align: left;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #333333;
  margin-top: -8px;
`;

export const ContainerFirst = styled.div`
  display: flex;
  @media (max-width: 700px) {
    margin-bottom: 10px;
  }
`;

export const Container = styled.div`
  display: flex;
  @media (max-width: 700px) {
    display: inline-block;
    margin-right: 30px;
  }
`;

export const ContainerIcon = styled.div`
  float: left;
`;

export const ContainerInstruction = styled.div`
  float: right;
`;

export const DivIcon = styled.div`
  margin-top: 50%;
`;

const Yields = () => {
  return (
    <ContainerText>
      <ContainerFirst>
        <ContainerIcon>
          <DivIcon>
            <i className="material-icons">local_dining</i>
          </DivIcon>
        </ContainerIcon>
        <ContainerInstruction>
          <Title>Yields</Title>
          <SubtitleOrange>
            <strong>12 servings</strong>
          </SubtitleOrange>
        </ContainerInstruction>
      </ContainerFirst>
      <Container>
        <ContainerIcon>
          <DivIcon>
            <i className="material-icons">schedule</i>
          </DivIcon>
        </ContainerIcon>
        <ContainerInstruction>
          <Title>Prep TIme</Title>
          <Subtitle>45 minutes</Subtitle>
        </ContainerInstruction>
      </Container>
      <Container>
        <ContainerIcon>
          <DivIcon>
            <i className="material-icons">schedule</i>
          </DivIcon>
        </ContainerIcon>
        <ContainerInstruction>
          <Title>Cook Time</Title>
          <Subtitle>1 hour</Subtitle>
        </ContainerInstruction>
      </Container>
      <Container>
        <ContainerIcon>
          <DivIcon>
            <i className="material-icons">schedule</i>
          </DivIcon>
        </ContainerIcon>
        <ContainerInstruction>
          <Title>Total Time</Title>
          <Subtitle>7,75 hours</Subtitle>
        </ContainerInstruction>
      </Container>
    </ContainerText>
  );
};

export default Yields;
