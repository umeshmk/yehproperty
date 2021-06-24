import styled from "styled-components";
import { IStyled } from "../types";

interface IProps extends IStyled {
  title: string;
  owner: string;
}

const Body = ({ className, title, owner }: IProps) => {
  return (
    <div className={className}>
      <div className="title">{title}</div>
      <div className="owner">{owner}</div>
    </div>
  );
};

const Title = styled(Body)`
  .title {
    color: ${(props) => props.theme.colors.b};
    font-family: ${(props) => props.theme.family.a};
    font-size: ${(props) => props.theme.size.h3};
    font-weight: 600;
  }
  .owner {
    color: ${(props) => props.theme.colors.a};
    font-family: ${(props) => props.theme.family.a};
    font-size: ${(props) => props.theme.size.h4};
    font-weight: 400;
  }
`;

const TitleBig = styled(Body)`
  text-align: center;
  .title {
    font-size: ${(props) => props.theme.size.h1};
  }
  .owner {
    color: ${(props) => props.theme.colors.a};
    /* font-weight: 600; */
    font-size: ${(props) => props.theme.size.h3};
  }
`;

export { Title, TitleBig };
