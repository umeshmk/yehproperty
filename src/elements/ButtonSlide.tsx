import styled from "styled-components";

const ButtonSlide = styled.button`
  position: absolute;
  cursor: pointer;
  color: ${(props) => props.theme.colors.c};
  /* background-color: ${(props) => props.theme.colors.a}; */
  font-size: ${(props) => props.theme.size.h3};
  z-index: 10;
  opacity: 0.8;
  border-radius: 5rem;
  padding: 0;
  margin: 0;
  border: none;

  &:hover {
    opacity: 1;
    /* filter: brightness(110%); */
  }
  &:active {
    opacity: 1;
    filter: brightness(90%);
  }
`;

export default ButtonSlide;
