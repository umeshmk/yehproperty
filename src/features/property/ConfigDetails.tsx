import styled from "styled-components";
import { Price, PriceSmall } from "../../elements";
import { ConfigDetailsType, IStyled } from "../../types";
import { calculatePrice } from "../../utility/calculatePrice";

interface IProps extends IStyled {
  details: ConfigDetailsType;
  price: string;
  config: string;
}

const Body = ({ className, config, details, price }: IProps) => {
  const { baths, bookingPrice, carpet, img } = details;
  const { p, text } = calculatePrice(bookingPrice);

  //   return {Object.entries(configDetails).map((i) => {});

  return (
    <div className={className}>
      {/* <div className="bed">
        {config}
        <small>x</small> <i className="fas fa-bed "></i>
      </div> */}
      {/* <PriceSmall price={price} /> */}

      <div>
        Bathrooms :
        <span>
          {baths}
          {/* <small>x</small> <i className="fas fa-bath"></i> */}
        </span>
      </div>
      <div>
        Booking Amount :
        <span>
          {p} {text}
        </span>
      </div>
      <div>
        Carpet area : <span>{carpet} sqft</span>
      </div>
      <div className="image">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

const ConfigDetails = styled(Body)`
  font-family: ${(props) => props.theme.family.a};
  color: ${(props) => props.theme.colors.a + "c0"};
  span {
    padding: 1rem;
    color: ${(props) => props.theme.colors.b};
    font-size: ${(props) => props.theme.size.h3};
    font-weight: 300;
  }
  .image {
    text-align: center;
    padding: 1rem;
    img {
      width: 10rem;
      height: 7rem;
    }
  }
`;

export default ConfigDetails;
