import styled from "styled-components";
import { IStyled } from "../types";
import { calculatePrice } from "../utility/calculatePrice";

interface IProps extends IStyled {
  list: {
    [name: string]: string;
  };
}

const Body = ({ className, list }: IProps) => {
  return (
    <ul className={className}>
      {Object.keys(list).map((key) => {
        const { p, text } = calculatePrice(list[key]);

        return (
          <>
            <li key={key}>
              {key} <small>x</small> <i className="fas fa-bed "></i>
              <div>
                <i className="fas fa-rupee-sign"></i>
                {p} {text}
              </div>
            </li>
          </>
        );
      })}
    </ul>
  );
};

const ConfigPrice = styled(Body)`
  color: ${(props) => props.theme.colors.a};
  font-size: ${(props) => props.theme.size.h4};
  list-style: none;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  padding: 0 1rem;

  div {
    font-weight: 600;
    border-top: 1px solid ${(props) => props.theme.colors.b + "55"};
    color: ${(props) => props.theme.colors.b};
    margin-top: 1rem;
  }
  li {
    padding: 0 1rem;
  }
  div {
    font-size: ${(props) => props.theme.size.h3};
    border-left: 1px solid ${(props) => props.theme.colors.b + "55"};
    padding: 1rem;
    font-weight: 300;
  }
  small {
    color: ${(props) => props.theme.colors.b};
  }
  .fa-rupee-sign {
    color: ${(props) => props.theme.colors.a + "80"};
    font-size: ${(props) => props.theme.size.h4};
    padding-right: 0.2rem;
  }
`;

export default ConfigPrice;
