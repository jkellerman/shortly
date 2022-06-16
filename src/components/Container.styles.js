import styled from "styled-components";
import { device } from "./Global.styles";

const Container = styled.div`
  margin: 0 auto;
  max-width: 90%;

  @media (${device.tablet}) {
    max-width: 85%;
  }

  @media (${device.laptop}) {
    width: 1108px;
    max-width: 80%;
  }
`;
export default Container;
