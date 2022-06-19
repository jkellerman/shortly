import styled from "styled-components";
import { device } from "./Global.styles";

const StyledLinkGroup = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.5rem;

  @media (${device.tabletL}) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const LinkGroup = ({ children }) => {
  return <StyledLinkGroup>{children}</StyledLinkGroup>;
};

export default LinkGroup;
