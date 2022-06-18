import styled from "styled-components";
import Container from "./Container.styles";
import { device } from "./Global.styles";
import Button from "./Button";

const StyledHero = styled.section`
  background-color: #fff;
  display: flex;
  position: relative;
  overflow: hidden;
  top: -1.5rem;

  @media (${device.tablet}) {
    top: -0.25rem;
    padding-top: 1rem;
  }
`;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5.5rem;
  padding-bottom: 4rem;

  @media (${device.tablet}) {
    flex-direction: row-reverse;
    padding-bottom: unset;
  }

  @media (${device.laptop}) {
    min-width: 1108px;
    transform: translateX(7rem);
  }
`;

const HeroHeader = styled.h1`
  text-align: center;
  color: #34313d;
  font-size: 2.625rem;
  margin-bottom: 1rem;
  z-index: 4;
  @media (${device.tablet}) {
    text-align: start;
    font-size: 2rem;
  }

  @media (${device.tabletL}) {
    font-size: 2.625rem;
  }

  @media (${device.laptop}) {
    font-size: 5rem;
    line-height: 90px;
  }
`;

const HeroDescription = styled.p`
  color: #9e9aa8;
  font-size: 1.125rem;
  text-align: center;
  margin-bottom: 2rem;
  @media (${device.tablet}) {
    text-align: start;
    font-size: 1rem;
  }

  @media (${device.tabletL}) {
    font-size: 1.25rem;
  }

  @media (${device.laptop}) {
    max-width: 540px;
    font-size: 1.375rem;
  }
`;

const Illustration = styled.img`
  @media (${device.mobileS}) {
    max-width: 350px;
    right: -4rem;
  }

  max-width: 500px;
  margin-bottom: 2.25rem;
  position: relative;
  right: -5.5rem;

  @media (${device.tablet}) {
    max-width: 400px;
  }

  @media (${device.tabletL}) {
    max-width: 550px;
  }

  @media (${device.laptop}) {
    max-width: unset;
    right: unset;
    top: 1.25rem;
  }
`;

const CTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (${device.tablet}) {
    align-items: flex-start;
  }

  @media (${device.laptop}) {
    min-width: 55%;
  }
`;

const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <HeroContainer>
          <Illustration
            src="../images/illustration-working.svg"
            alt="illustration of person working"
          />
          <CTAContainer>
            <HeroHeader>More than just shorter links</HeroHeader>
            <HeroDescription>
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </HeroDescription>
            <Button primary cta>
              Get Started
            </Button>
          </CTAContainer>
        </HeroContainer>
      </Container>
    </StyledHero>
  );
};

export default Hero;
