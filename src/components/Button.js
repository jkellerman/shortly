import styled from "styled-components";
import { device } from "./Global.styled";

const StyledButton = styled.button`
  background-color: ${({ primary }) => (primary ? "#2BD0D0" : "transparent")};
  border: none;
  color: #fff;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  border-radius: ${({ primary }) => (primary ? "28px" : "5px")};
  font-size: ${({ nav, cta, shortenIt, copy, login }) => {
    if (nav || shortenIt || login) return "1.125rem";
    else if (cta) return "1.25rem";
    else if (copy) return "1rem";
  }};
  padding: ${({ nav, cta, shortenIt, copy }) => {
    if (nav) return "0.75em 0";
    else if (cta) return "0.75em 2.5em";
    else if (shortenIt || copy) return "0.625em";
  }};

  &:hover {
    background-color: ${({ login }) => (login ? "transparent" : "#9ae3e3")};
    transition: all 0.2s ease-in;
    color: ${({ login }) => {
      if (login) return "#34313d";
    }};
  }

  @media (${device.mobileL}) {
    border-radius: ${({ shortenIt }) => shortenIt === "10px"};
    font-size: ${({ nav, copy, shortenIt, login }) => {
      if (nav || copy || login) return "0.9375rem";
      else if (shortenIt) return "1.25rem";
    }};
    color: ${({ primary }) => (primary ? "#fff" : "#9e9aa8")};
    padding: ${({ nav, login }) => {
      if (nav) return "0.5em 1.5em";
      else if (login) return "0em";
    }};
  }
`;

const Button = ({
  cta,
  copy,
  nav,
  shortenIt,
  primary,
  secondary,
  text,
  login,
}) => {
  return (
    <StyledButton
      primary={primary}
      nav={nav}
      cta={cta}
      copy={copy}
      shortenIt={shortenIt}
      secondary={secondary}
      login={login}
    >
      {text}
    </StyledButton>
  );
};

export default Button;