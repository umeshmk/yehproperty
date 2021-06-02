import styled from "styled-components";
import { IStyled } from "../types";

const Body = ({ className }: IStyled) => {
  return (
    <div className={className}>
      <i className="fas fa-exclamation-circle"></i>
      <h1>NOT FOUND</h1>
    </div>
  );
};

const NotFound = styled(Body)`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 50vh; */
  .fas {
    color: ${(props) => props.theme.colors.a};
    font-size: 10rem;
  }
`;

export default NotFound;
