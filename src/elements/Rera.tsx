import styled from "styled-components";
import { IStyled, ProjectType } from "../types";

interface IProps extends IStyled {
  data: ProjectType["rera"];
}

const Body = ({ className, data }: IProps) => {
  if (!data.approved) return null;

  return (
    <a
      className={className}
      href="https://maharerait.mahaonline.gov.in/"
      target="_blank"
      rel="noreferrer"
    >
      Rera-Id : {data.id}
    </a>
  );
};

const Rera = styled(Body)`
  /* background-color: ${(props) => props.theme.colors.b}; */
  color: ${(props) => props.theme.colors.b};
  padding: 0 1rem;
  text-transform: uppercase;
  :hover {
    color: ${(props) => props.theme.colors.b + "b0"};
  }
  :active {
    color: ${(props) => props.theme.colors.b};
  }
  /* color: ${(props) => props.theme.colors.c}; */
`;

export default Rera;
