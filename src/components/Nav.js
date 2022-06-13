import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { device } from "./Global.styled";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem 0;
  position: relative;

  @media (${device.tablet}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 0;
  }
`;

const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  @media (${device.tablet}) {
    display: block;
    justify-content: flex-start;
    width: unset;
  }
`;

const Logo = styled.div`
  display: flex;
  align-self: center;
  @media (${device.tablet}) {
    margin-right: 3rem;
    align-self: center;
  }
`;

const Hamburger = styled.div`
  @media (${device.tablet}) {
    display: none;
  }
`;

const NavContainer = styled.div`
  width: 100%;
  background-color: #3a3054;
  display: none;
  position: absolute;
  top: 6rem;
  border-radius: 10px;
  padding: 2rem 1.5rem;
  color: #fff;
  font-weight: 700;
  z-index: 5;
  @media (${device.tablet}) {
    display: flex;
    position: unset;
    top: unset;
    background-color: #fff;
    border-radius: unset;
    padding: unset;
    color: #9e9aa8;
    z-index: unset;
  }
`;

const Line = styled.hr`
  border: 0.25px solid #9e9aa8;
  width: 100%;
  margin: 1.875rem auto;

  @media (${device.tablet}) {
    display: none;
  }
`;

const NavList = styled.ul`
  align-self: center;
  width: 100%;
`;

const Link = styled.li`
  cursor: pointer;
  list-style: none;
  text-align: center;
  margin-bottom: 1.875rem;
  font-size: 1.125rem;

  &:hover {
    color: #34313d;
    transition: all 0.2s ease-in;
  }
  @media (${device.tablet}) {
    font-size: 0.8rem;
    display: inline-block;
    margin-right: 2rem;
    text-align: unset;
    margin-bottom: unset;
  }

  @media (${device.laptop}) {
    font-size: 0.9375rem;
  }
`;

const LoginMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.3125rem;
  @media (${device.tablet}) {
    flex-direction: row;
    width: 70%;
    justify-content: flex-end;
  }
`;

const Nav = () => {
  const [toggle, setToggle] = useState(true);

  const toggleMenu = () => {
    setToggle((prevToggle) => !prevToggle);
  };
  return (
    <StyledNav>
      <NavMenu>
        <Logo>
          <img src="../images/logo.svg" alt="logo" />
        </Logo>
        <Hamburger onClick={toggleMenu}>
          <img src="../images/icon-hamburger.svg" alt="hamburger" />
        </Hamburger>
      </NavMenu>
      <NavContainer className={toggle ? "hide" : "show"}>
        <NavList>
          <Link>Features</Link>
          <Link>Pricing</Link>
          <Link>Resources</Link>
        </NavList>
        <Line />
        <LoginMenu>
          <Button text="Login" login />
          <Button text="Sign Up" primary nav />
        </LoginMenu>
      </NavContainer>
    </StyledNav>
  );
};

export default Nav;
