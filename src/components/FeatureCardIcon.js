import styled from "styled-components";
import { device } from "./Global.styles";

const Icon = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${({ src }) => src});
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

const FeatureCardIcon = ({ src }) => {
  return <Icon src={src}></Icon>;
};

export default FeatureCardIcon;
