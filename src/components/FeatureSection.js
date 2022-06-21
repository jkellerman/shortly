import styled from "styled-components";
import { device } from "./Global.styles";
import Container from "./Container.styles";
import FeatureCard from "./FeatureCard";
import FeatureCardIcon from "./FeatureCardIcon";

const FeatureSectionContainer = styled.section`
  margin-bottom: 5rem;

  @media (${device.laptop}) {
    margin-bottom: 7.5rem;
  }
`;

const Line = styled.div`
  background-color: #2bd0d0;
  height: 99%;
  width: 8px;
  z-index: -1;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (${device.laptop}) {
    height: 8px;
    width: 99%;
    left: unset;
    top: 55%;
    transform: translateX(0);
    transform: translateY(-50%);
  }
`;

const StyledFeatureSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FeatureHeader = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1rem;
  text-align: center;

  @media (${device.laptop}) {
    font-size: 2.5rem;
  }
`;

const FeatureDescription = styled.p`
  text-align: center;
  color: #9e9aa8;
  width: 90%;
  margin-bottom: 5.75rem;

  @media (${device.laptop}) {
    width: 55%;
    margin-bottom: 6.25rem;
  }
`;

const FeatureCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 5.75rem;
  justify-content: center;

  @media (${device.laptop}) {
    flex-direction: row;
    gap: 1.875rem;
  }
`;

const FeatureCardHeading = styled.h3`
  font-size: 1.375rem;
  color: #34313d;
  margin-bottom: 0.75rem;

  @media (${device.laptop}) {
    align-self: flex-start;
  }
`;

const FeatureCardDescription = styled.p`
  font-size: 0.9375rem;
  color: #9e9aa8;
  text-align: center;
  width: 95%;

  @media (${device.laptop}) {
    text-align: start;
    align-self: flex-start;
    width: 100%;
  }
`;

const FeatureSection = () => {
  return (
    <FeatureSectionContainer>
      <Container>
        <StyledFeatureSection>
          <FeatureHeader>Advanced Statistics</FeatureHeader>
          <FeatureDescription>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </FeatureDescription>
        </StyledFeatureSection>
        <FeatureCardContainer>
          <Line />
          <FeatureCard first>
            <FeatureCardIcon bgImg={"../images/icon-brand-recognition.svg"} />
            <FeatureCardHeading>Brand Recognition</FeatureCardHeading>
            <FeatureCardDescription>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </FeatureCardDescription>
          </FeatureCard>
          <FeatureCard second>
            <FeatureCardIcon bgImg={"../images/icon-detailed-records.svg"} />
            <FeatureCardHeading>Detailed Records</FeatureCardHeading>
            <FeatureCardDescription>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </FeatureCardDescription>
          </FeatureCard>
          <FeatureCard third>
            <FeatureCardIcon bgImg={"../images/icon-fully-customizable.svg"} />
            <FeatureCardHeading>Fully customisable</FeatureCardHeading>
            <FeatureCardDescription>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </FeatureCardDescription>
          </FeatureCard>
        </FeatureCardContainer>
      </Container>
    </FeatureSectionContainer>
  );
};

export default FeatureSection;
