import styled from "styled-components";
import { LocationSmall, PriceSmall } from ".";
import { IStyled } from "../types";
import { calculatePrice } from "../utility/calculatePrice";

interface IProps extends IStyled {
  img: string;
  id: number;
  price: string;
  title: string;
  location: string;
}

// const Image = styled.img`
//   width: 100%;
//   height: 100%;
// `;

const Body = ({ className, img, id, price, location, title }: IProps) => {
  return (
    <div className={className}>
      {/* <Image src={img} /> */}
      <PriceSmall className="price" price={price} />
      <div className="location">
        <LocationSmall>{location}</LocationSmall>
      </div>
      <div className="title">{title}</div>
    </div>
  );
};

const PropertyListItem = styled(Body)`
  position: relative;
  box-shadow: inset 0 -100rem 100rem ${(props) => props.theme.colors.a + "53"};
  background-image: url(${(props) => props.img});
  /* border: 1px solid blue; */
  width: 100%;
  height: 100%;

  .location,
  .price,
  .title {
    position: absolute;
  }
  .location {
    top: 0;
    left: 0;
  }
  .price {
    left: auto;
    right: 0;
  }
  .title {
    bottom: 0;
    /* background-color: ${(props) => props.theme.colors.c + "c0"}; */
    box-shadow: inset 0 -100rem 100rem ${(props) => props.theme.colors.c + "c3"};
    font-weight: 800;
    padding: 0 1rem;
  }

  :hover {
    box-shadow: none;
  }
`;

export default PropertyListItem;
