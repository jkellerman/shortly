import styled from "styled-components";
import Container from "./Container.styled";
import Button from "./Button";
import { device } from "./Global.styled";

const Background = styled.div`
  background-color: #3a3054;
  background-image: url("../images/bg-shorten-mobile.svg");
  background-repeat: no-repeat;
  background-position: top right;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 10px;

  @media (${device.tablet}) {
    background-image: url("../images/bg-shorten-desktop.svg");
    position: relative;
    top: -4rem;
    flex-direction: row;
    padding: 3.25rem 4rem;
    justify-content: space-between;
  }
`;

const Label = styled.label`
  width: 100%;
  margin-right: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 1rem;
  padding: 1rem 1rem;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  font-family: inherit;
  color: #34313d;

  &::placeholder {
    font-size: 1rem;
    color: #34313d;
    opacity: 0.7;
    font-family: inherit;
  }

  @media (${device.tablet}) {
    margin-bottom: 0;
    font-size: 1.25rem;

    &::placeholder {
      font-size: 1.25rem;
    }
  }
`;

const LinkShortener = () => {
  return (
    <Container>
      <Background>
        <Label htmlFor="input">
          <Input id="input" type="text" placeholder="Shorten a link here..." />
        </Label>
        <Button type="submit" text="Shorten It!" shortenIt secondary />
      </Background>
    </Container>
  );
};

export default LinkShortener;
