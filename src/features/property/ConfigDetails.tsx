import { useState } from "react";
import styled from "styled-components";
import { ImageModal, Price, PriceSmall } from "../../elements";
import { ConfigDetailsType, IStyled } from "../../types";
import { calculatePrice } from "../../utility/calculatePrice";
import useClickOutside from "../../utility/useClickOutside";

interface IProps extends IStyled {
  details: ConfigDetailsType;
  price: string;
  config: string;
}

const Body = ({ className, config, details, price }: IProps) => {
  const { baths, bookingPrice, carpet, img } = details;
  const { p, text } = calculatePrice(bookingPrice);
  const { ref, isVisible, setIsVisible } = useClickOutside(false);

  const handleModal = () => {
    setIsVisible(true);
  };

  return (
    <div className={className}>
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
      <div className="image" onClick={handleModal}>
        <img src={img} alt="" />
      </div>

      {isVisible && (
        <div ref={ref}>
          <ImageModal img={img} />
        </div>
      )}
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
    cursor: pointer;
    img {
      width: 14rem;
      height: 10rem;
    }
  }
`;

export default ConfigDetails;
