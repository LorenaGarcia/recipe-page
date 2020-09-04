import React from "react";
import styled from "styled-components";
import Instructions from "./Instructions";

export const ContainerText = styled.div`
  text-align: left;
  max-width: 592px;
`;

export const Title = styled.p`
  font-family: Playfair Display;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: #333333;
`;

export const ContainerIngredients = styled.div`
  text-align: left;
  max-width: 592px;
`;

export const ContainerInput = styled.div`
  max-width: 10%;
  float: left;
  margin-top: 3px;
`;

export const ContainerLabel = styled.div`
  max-width: 90%;
  float: right;
  margin-bottom: 10px;
  margin-left: 10px;
`;

export const Container = styled.div`
  display: flex;
`;

export const TitleIngredients = styled.p`
  font-family: Playfair Display;
  font-style: italic;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #333333;
`;

export const Label = styled.label`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  color: #333333;
`;

export const Input = styled.input`
  &:checked + ${Label} {
    background: orange;
  }
`;

const Ingredients = () => {
  return (
    <ContainerText>
      <Title>Ingredients</Title>
      <ContainerIngredients>
        <TitleIngredients>Graham Cracker Crust</TitleIngredients>
        <Container>
          <ContainerInput>
            <Input type="checkbox" />
          </ContainerInput>
          <ContainerLabel>
            <Label>
              1 and 1/2 cups (150g) <strong>graham cracker crumbs</strong>{" "}
              (about 10 full sheet graham crackers)
            </Label>
          </ContainerLabel>
        </Container>

        <Container>
          <ContainerInput>
            <Input type="checkbox" />
          </ContainerInput>
          <ContainerLabel>
            <Label>
              5 Tablespoons (70g) <strong>unsalted butter</strong>, melted
            </Label>
          </ContainerLabel>
        </Container>

        <Container>
          <ContainerInput>
            <Input type="checkbox" />
          </ContainerInput>
          <ContainerLabel>
            <Label>
              1/4 cup (50g) <strong>granulated sugar</strong>
            </Label>
          </ContainerLabel>
        </Container>
      </ContainerIngredients>

      <ContainerIngredients>
        <TitleIngredients>Cheesecake</TitleIngredients>
        <Container>
          <ContainerInput>
            <Input type="checkbox" />
          </ContainerInput>
          <ContainerLabel>
            <Label>
              four 8-ounce blocks (904g) full-fat <strong>cream cheese</strong>,
              softened to room temperature
            </Label>
          </ContainerLabel>
        </Container>

        <Container>
          <ContainerInput>
            <Input type="checkbox" />
          </ContainerInput>
          <ContainerLabel>
            <Label>
              1 cup (200g) <strong>granulated sugar</strong>
            </Label>
          </ContainerLabel>
        </Container>

        <Container>
          <ContainerInput>
            <Input type="checkbox" />
          </ContainerInput>
          <ContainerLabel>
            <Label>
              1 cup (240g) full-fat <strong>sour cream</strong>, at room
              temperature
            </Label>
          </ContainerLabel>
        </Container>

        <Container>
          <ContainerInput>
            <Input type="checkbox" />
          </ContainerInput>
          <ContainerLabel>
            <Label>
              1 teaspoon <strong>pure vanilla extract</strong>
            </Label>
          </ContainerLabel>
        </Container>

        <Container>
          <ContainerInput>
            <Input type="checkbox" />
          </ContainerInput>
          <ContainerLabel>
            <Label>
              2 teaspoons <strong>fresh lemon juice</strong> (optional, but
              recommended)
            </Label>
          </ContainerLabel>
        </Container>

        <Container>
          <ContainerInput>
            <Input type="checkbox" />
          </ContainerInput>
          <ContainerLabel>
            <Label>
              3 large <strong>eggs</strong>, at room temperature
            </Label>
          </ContainerLabel>
        </Container>

        <Container>
          <ContainerInput>
            <Input type="checkbox" />
          </ContainerInput>
          <ContainerLabel>
            <Label>
              topping suggestions: salted caramel, lemon curd, strawberry
              topping, chocolate ganache, red wine chocolate ganache, fresh
              fruit, whipped cream, or raspberry sauce (recipe in notes)
            </Label>
          </ContainerLabel>
        </Container>
      </ContainerIngredients>
      <Instructions />
    </ContainerText>
  );
};

export default Ingredients;
