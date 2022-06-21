import styled from "styled-components";
import { device } from "./Global.styles";
import Button from "./Button";

const CTAContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-image: url("../images/bg-boost-mobile.svg");
  background-repeat: no-repeat;
  background-position: top right;
  background-size: cover;
  background-color: #3a3054;
  padding: 5.625rem 0;

  @media (${device.tablet}) {
    gap: 2rem;
    background-image: url("../images/bg-boost-desktop.svg");
  }
`;

const StyledCTA = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: #fff;
  text-align: center;

  @media (${device.laptop}) {
    font-size: 2.5rem;
  }
`;

const CTA = () => {
  return (
    <CTAContainer>
      <StyledCTA>Boost your links today</StyledCTA>
      <Button primary cta>
        Get Started
      </Button>
    </CTAContainer>
  );
};

export default CTA;
