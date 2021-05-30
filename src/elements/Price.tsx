import styled from "styled-components";
import { IStyled } from "../types";

interface IProps extends IStyled {
  price: string;
}

const Body = ({ className, price }: IProps) => {
  let text: string = "";

  const calculate = (price: string) => {
    // default is thousands
    let p = parseInt(price);

    if (p >= 10000000) {
      text = "Cr";
      p = p / 1e7;
    } else if (p < 100000) {
      text = "K";
      p = p / 1e3;
    } else if (p >= 100000) {
      text = "Lacs";
      p = p / 1e5;
    }

    return p;
  };
  return (
    <div className={className}>
      {calculate(price)} <span>{text}</span>
    </div>
  );
};

const Price = styled(Body)`
  color: ${(props) => props.theme.colors.c};
  background-color: ${(props) => props.theme.colors.a};
  font-size: ${(props) => props.theme.size.h2};
  padding: 1rem;
  font-weight: 300;
  display: inline-block;
  span {
    font-family: ${(props) => props.theme.family.c};
    font-size: ${(props) => props.theme.size.h3};
  }
  /* border-radius: 1rem; */
`;

export default Price;
