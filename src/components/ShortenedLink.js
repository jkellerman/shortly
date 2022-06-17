import styled from "styled-components";
import Button from "./Button";
import { device } from "./Global.styles";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

const LinkContainer = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 1rem;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  margin-top: -2.5rem;

  @media (${device.tablet}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  @media (${device.tabletL}) {
    padding: 1rem 2rem;
  }
`;

const OriginalLink = styled.span`
  color: #34313d;
  padding: 0 0 0.375rem 0;
  border-bottom: 1px solid #9e9aa8;
  word-wrap: break-word;

  @media (${device.tablet}) {
    border-bottom: none;
    padding: 0;
    max-width: 50%;
  }

  @media (${device.tabletL}) {
    max-width: 60%;
  }
`;

const StyledShortenedLink = styled.span`
  color: #2bd0d0;
  padding: 0.375rem 0;
  margin: 0.5rem 0;
  word-wrap: break-word;

  @media (${device.tablet}) {
    padding: 0;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media (${device.tablet}) {
    flex-direction: row;
    gap: 1.5rem;
  }
`;

const ShortenedLink = ({ originalLink, shortenedLink }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <LinkContainer>
      <OriginalLink>{originalLink}</OriginalLink>
      <StyledDiv>
        <StyledShortenedLink>{shortenedLink}</StyledShortenedLink>
        <CopyToClipboard text={shortenedLink}>
          <Button copy secondary onClick={copy} copied={isCopied}>
            {isCopied ? "Copied!" : "Copy"}
          </Button>
        </CopyToClipboard>
      </StyledDiv>
    </LinkContainer>
  );
};

export default ShortenedLink;
