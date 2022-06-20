import styled from "styled-components";
import { device } from "./Global.styles";

const Input = styled.input`
  width: 100%;
  margin-bottom: 1rem;
  padding: 1rem 1rem;
  font-size: 1rem;
  border-radius: 5px;
  border: ${({ error }) => (error ? "3px solid #f46363" : "none")};
  font-family: inherit;
  margin-right: 1.5rem;
  color: #34313d;

  &::placeholder {
    font-size: 1rem;
    color: ${({ error }) => (error ? "#f46363" : "inherit")};
    opacity: 0.7;
    font-family: inherit;
  }

  @media (${device.tablet}) {
    margin-bottom: 0;
    font-size: 1.25rem;
    border-radius: 10px;

    &::placeholder {
      font-size: 1.25rem;
    }
  }
`;

const LinkShortenerInput = (props) => {
  return (
    <Input
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      autoComplete={props.autoComplete}
      onChange={props.onChange}
      value={props.value}
      error={props.error}
    />
  );
};

export default LinkShortenerInput;
