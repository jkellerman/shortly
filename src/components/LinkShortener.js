import styled from "styled-components";
import Container from "./Container.styles";
import Button from "./Button";
import { device } from "./Global.styles";
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import ShortenedLink from "./ShortenedLink";
import LoadingAnimation from "./LoadingAnimation";
import LinkShortenerInput from "./LinkShortenerInput";

const Background = styled.div`
  background-color: #3a3054;
  background-image: url("../images/bg-shorten-mobile.svg");
  background-repeat: no-repeat;
  background-position: top right;
  background-size: cover;
  padding: 1.5rem;
  border-radius: 10px;
  position: relative;
  top: -5rem;

  @media (${device.tablet}) {
    background-image: url("../images/bg-shorten-desktop.svg");
    flex-direction: row;
    justify-content: space-between;
    top: -4rem;
    padding: 3.25rem 4rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;

  @media (${device.tablet}) {
    flex-direction: row;
    min-height: 64px;
  }
`;

const Label = styled.label`
  display: none;
`;

const ErrorMessage = styled.span`
  font-size: 0.75rem;
  color: #f46363;
  font-style: italic;
  position: relative;
  top: -0.5rem;
  @media (${device.tablet}) {
    font-size: 1rem;
    top: 4.5rem;
    position: absolute;
  }
`;

const List = styled.div`
  width: 100%;
`;

const ClearHistory = styled.div`
  font-style: italic;
  color: #9e9aa8;
  text-align: center;
  margin-bottom: 3rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const LinkShortener = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState(
    () => JSON.parse(localStorage.getItem("shortly-links")) || []
  );
  const [isLoading, setIsLoading] = useState(false);
  const listRef = useRef(null);
  const [inputError, setInputError] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
    setInputError(null);
  };

  const validateUrl = (input) => {
    const regex =
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#&//=]*)/gi;

    if (input.length <= 0)
      return { valid: false, error: "Please provide a URL" };

    if (input.match(regex)) {
      return { valid: true, error: null };
    } else {
      return { valid: false, error: "Please provide a URL" };
    }
  };

  const getShortenedLink = (e) => {
    e.preventDefault();
    const { valid, error } = validateUrl(input);

    if (valid) {
      setIsLoading(true);
      axios
        .get(`https://api.shrtco.de/v2/shorten?url=${input}`)
        .then((resp) => {
          const listItem = {
            originalLink: resp.data.result.original_link,
            shortenedLink: resp.data.result.full_short_link2,
          };
          setList([...list].concat(listItem));
          setIsLoading(false);
          setInputError(error);
          if (list.length >= 2) {
            listRef.current.scrollIntoView({
              block: "nearest",
              behaviour: "smooth",
            });
          }
        });
    } else {
      setIsLoading(false);
      setInputError(error);
    }
    setInput("");
  };

  useEffect(() => {
    localStorage.setItem("shortly-links", JSON.stringify(list));
  }, [list]);

  const clearHistory = () => {
    setList([]);
  };
  const links = list.map((link, index) => {
    return (
      <ShortenedLink
        key={index}
        originalLink={link.originalLink}
        shortenedLink={link.shortenedLink}
      />
    );
  });

  return (
    <Container>
      <Background>
        <Form onSubmit={getShortenedLink}>
          <Label htmlFor="input">Input:</Label>
          <LinkShortenerInput
            id="input"
            type="url"
            placeholder="Shorten a link here..."
            autoComplete="off"
            onChange={handleChange}
            value={input}
            error={inputError}
          />
          <ErrorMessage>{inputError}</ErrorMessage>
          <Button type="submit" shortenIt secondary disabled={isLoading}>
            {isLoading ? <LoadingAnimation /> : "Shorten It"}
          </Button>
        </Form>
      </Background>
      <List ref={listRef}>{links}</List>
      {list.length > 0 && (
        <ClearHistory onClick={clearHistory}>Clear History</ClearHistory>
      )}
    </Container>
  );
};

export default LinkShortener;
