import styled from "styled-components";
import { IStyled } from "../types";

// const Body = ({ className }: IStyled) => {
// return <div className={className}></div>;
// };

const Text = styled.p`
  color: ${(props) => props.theme.colors.b + "cc"};
  font-size: ${(props) => props.theme.size.h4};
  font-family: ${(props) => props.theme.family.a};
  font-weight: 400;
  font-style: italic;
  text-align: justify;
  /* position: relative; */
`;

export default Text;
