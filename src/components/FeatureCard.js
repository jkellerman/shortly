import styled from "styled-components";
import { device } from "./Global.styles";

const StyledFeatureCard = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 0 2rem 2.5rem;
  line-height: 26px;

  @media (${device.laptop}) {
    justify-content: start;
    width: 350px;
    max-width: 350px;
    transform: ${({ first, second, third }) => {
      if (first) return "0";
      else if (second) return "translateY(2rem)";
      else if (third) return "translateY(4rem)";
    }};
  }
`;

const FeatureCard = ({ children, first, second, third }) => {
  return (
    <StyledFeatureCard first={first} second={second} third={third}>
      {children}
    </StyledFeatureCard>
  );
};

export default FeatureCard;
