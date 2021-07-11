import styled from "styled-components";
import { IStyled } from "../types";
import { calculatePrice } from "../utility/calculatePrice";

interface IProps extends IStyled {
  price: string;
}

const Body = ({ className, price }: IProps) => {
  const { p, text } = calculatePrice(price);

  return (
    <div className={className}>
      <i className="fas fa-rupee-sign"></i>
      {p} <span>{text} +</span>
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

  .fa-rupee-sign {
    color: ${(props) => props.theme.colors.c + "50"};
    font-size: ${(props) => props.theme.size.h3};
    padding-right: 0.4rem;
  }
`;

const PriceSmall = styled(Price)`
  font-size: ${(props) => props.theme.size.h4};
  padding: 0.2rem 0.3rem;
  span {
    font-size: ${(props) => props.theme.size.h5};
  }
  .fa-rupee-sign {
    /* display: none; */
    color: ${(props) => props.theme.colors.c + "80"};
    font-size: ${(props) => props.theme.size.h5};
  }
`;

export { Price, PriceSmall };
