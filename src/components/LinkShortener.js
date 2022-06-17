import styled from "styled-components";
import Container from "./Container.styles";
import Button from "./Button";
import { device } from "./Global.styles";
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import ShortenedLink from "./ShortenedLink";
import LoadingAnimation from "./LoadingAnimation";

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

const ErrorMessage = styled.div`
  display: none;
  font-size: 0.75rem;
  color: #f46363;
  font-style: italic;
  position: relative;
  top: -0.5rem;
  @media (${device.tablet}) {
    font-size: 1rem;
    top: 4.25rem;
    position: absolute;
  }
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 1rem;
  padding: 1rem 1rem;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  font-family: inherit;
  margin-right: 1.5rem;
  color: #34313d;

  &:invalid {
    border: 2px solid #f46363;
  }

  &:invalid ~ ${ErrorMessage} {
    display: block;
  }

  &::placeholder {
    font-size: 1rem;
    color: inherit;
    opacity: 0.7;
    font-family: inherit;
  }

  @media (${device.tablet}) {
    margin-bottom: 0;
    font-size: 1.25rem;

    &::placeholder {
      font-size: 1.25rem;
    }
  }
`;

const List = styled.div`
  width: 100%;
`;

const LinkShortener = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState(
    () => JSON.parse(localStorage.getItem("shortly-links")) || []
  );
  const [isLoading, setIsLoading] = useState(false);
  const listRef = useRef(null);
  const [error, setError] = useState(false);

  const getShortenedLink = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .get(`https://api.shrtco.de/v2/shorten?url=${input}`)
      .then((resp) => {
        const listItem = {
          originalLink: resp.data.result.original_link,
          shortenedLink: resp.data.result.full_short_link2,
        };
        setTimeout(() => {
          setList([...list].concat(listItem));
          setIsLoading(false);
          listRef.current.scrollIntoView({ block: "end", behaviour: "smooth" });
        }, 1000);
      })
      .catch(() => {
        setIsLoading(false);
        setError(true);
      });

    input === "" && getShortenedLink ? setError(true) : setError(false);
    setInput("");
  };

  useEffect(() => {
    localStorage.setItem("shortly-links", JSON.stringify(list));
  }, [list]);

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
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
          <Input
            id="input"
            type="url"
            placeholder="Shorten a link here..."
            autoComplete="off"
            onChange={handleChange}
            value={input}
            required={error ? true : false}
          />
          <ErrorMessage>Please add a link</ErrorMessage>
          <Button type="submit" shortenIt secondary disabled={isLoading}>
            {isLoading ? <LoadingAnimation /> : "Shorten It"}
          </Button>
        </Form>
      </Background>
      <List ref={listRef}>{links}</List>
    </Container>
  );
};

export default LinkShortener;
