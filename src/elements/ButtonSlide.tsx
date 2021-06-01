import styled from "styled-components";

const ButtonSlide = styled.button`
  position: absolute;
  cursor: pointer;
  color: ${(props) => props.theme.colors.a};
  background-color: ${(props) => props.theme.colors.c};
  font-size: ${(props) => props.theme.size.h4};
  z-index: 10;
  opacity: 0.5;

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
