import styled from "styled-components";
import { IStyled } from "../types";

interface IProps extends IStyled {
  list: {
    [name: string]: string | number;
  };
}

const Body = ({ className, list }: IProps) => {
  return (
    <ul className={className}>
      {Object.keys(list).map((key) => {
        return (
          <li key={key}>
            {key} :<div>{list[key]}</div>
          </li>
        );
      })}
    </ul>
  );
};

const FeatureList = styled(Body)`
  color: ${(props) => props.theme.colors.a};
  font-size: ${(props) => props.theme.size.h4};
  list-style: none;
  text-transform: capitalize;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  margin: 0;
  margin-top: 1rem;
  background-color: ${(props) => props.theme.colors.a + "20"};

  div {
    font-weight: 600;
    border-top: 1px solid ${(props) => props.theme.colors.b + "55"};
    color: ${(props) => props.theme.colors.b};
    margin-top: 1rem;
  }
  @media all and (${(props) => props.theme.breakpoint.sm}) {
    flex-wrap: wrap;
    li {
      padding: 1rem 0.51rem;
    }
  }
`;

export default FeatureList;
