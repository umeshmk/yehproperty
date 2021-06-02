import styled from "styled-components";

const Button = styled.a`
  background-color: ${(props) => props.theme.colors.a};
  color: ${(props) => props.theme.colors.c};
  border: none;
  padding: 1rem;
  font-weight: 600;
  cursor: pointer;
  /* display: block; */
  text-align: center;
  text-decoration: none;

  &:hover {
    filter: brightness(110%);
  }
  &:active {
    filter: brightness(90%);
  }
`;
export default Button;
