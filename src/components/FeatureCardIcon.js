import styled from "styled-components";
import { device } from "./Global.styles";

const Icon = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${({ bgImg }) => bgImg});
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background-color: #3a3054;
  position: relative;
  top: -2.5rem;

  @media (${device.laptop}) {
    left: -40%;
  }
`;

const FeatureCardIcon = ({ bgImg }) => {
  return <Icon bgImg={bgImg}></Icon>;
};

export default FeatureCardIcon;
