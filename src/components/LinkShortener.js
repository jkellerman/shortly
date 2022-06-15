import styled from "styled-components";
import Container from "./Container.styled";
import Button from "./Button";
import { device } from "./Global.styled";
import axios from "axios";
import { useState } from "react";
import ShortenedLink from "./ShortenedLink";

const Background = styled.div`
  background-color: #3a3054;
  background-image: url("../images/bg-shorten-mobile.svg");
  background-repeat: no-repeat;
  background-position: top right;
  padding: 1.5rem;
  border-radius: 10px;
  position: relative;
  top: -5rem;

  @media (${device.tablet}) {
    background-image: url("../images/bg-shorten-desktop.svg");
    flex-direction: row;
    justify-content: space-between;
    top: -4rem;
  }

  @media (${device.laptop}) {
    padding: 3.25rem 4rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  @media (${device.tablet}) {
    flex-direction: row;
  }
`;

const Label = styled.label`
  display: none;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 1rem;
  padding: 1rem 1rem;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  font-family: inherit;
  color: #34313d;
  margin-right: 1.5rem;

  &::placeholder {
    font-size: 1rem;
    color: #34313d;
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
  const [list, setList] = useState([]);

  const getShortenedLink = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.shrtco.de/v2/shorten?url=${input}`)
      .then((resp) => {
        const listItem = {
          id: new Date().valueOf.toString(),
          originalLink: resp.data.result.original_link,
          shortenedLink: resp.data.result.full_short_link2,
        };
        setList([...list].concat(listItem));
      })
      .catch(console.error);

    setInput((prevInput) => "");
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setInput((prevInput) => value);
  };

  const links = list.map((link) => {
    return (
      <ShortenedLink
        key={link.id}
        id={link.id}
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
            type="text"
            placeholder="Shorten a link here..."
            autoComplete="off"
            onChange={handleChange}
            value={input}
          />
          <Button type="submit" text="Shorten It!" shortenIt secondary />
        </Form>
      </Background>
      <List>{links}</List>
    </Container>
  );
};

export default LinkShortener;
