import styled from "styled-components";
import { LocationSmall, PriceSmall } from ".";
import { IStyled, ProjectListType } from "../types";

interface IProps extends IStyled {
  item: ProjectListType;
  active: boolean;
}

const Body = ({ className, item }: IProps) => {
  const { img, price, location, title } = item;
  const url = process.env.REACT_APP_IMAGE_SM_URL + img;

  return (
    <div className={className} style={{ backgroundImage: `url(${url})` }}>
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
  box-shadow: ${({ theme, active }) =>
    active ? "none" : " inset 0 -100rem 100rem " + theme.colors.a + "53"};
  width: 100%;
  height: 100%;
  transition: all 300ms;
  cursor: pointer;

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
    box-shadow: inset 0 -0rem 0rem ${(props) => props.theme.colors.a + "53"};
    /* box-shadow: none; */
  }
`;

export default PropertyListItem;
