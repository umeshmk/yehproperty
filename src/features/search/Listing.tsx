import styled from "styled-components";
import { IStyled, PropertyType } from "../../types";
import { calculatePrice } from "../../utility/calculatePrice";
import { LocationSmall } from "../../elements";

interface IProps extends IStyled {
  // data: ProjectMapListType[] | BuyMapListType[];
  data: { [name: string]: any }[];
  type: PropertyType["type"];
}

const Body = ({ className, data, type }: IProps) => {
  return (
    <div className={className}>
      {data.map((item) => {
        let { p, text } = calculatePrice(item.price);
        return (
          <div className="item" key={item.id} id={`${item.id}`}>
            <div
              className="img"
              style={{
                backgroundImage: `url(${
                  process.env.REACT_APP_IMAGE_SM_URL + item.img
                })`,
              }}
            >
              <div className="location">
                <LocationSmall>{item.location}</LocationSmall>
              </div>
            </div>

            <div className="wrap">
              {type === "project" && <div className="title">{item.title}</div>}
              <div className="config">
                <i className="fas fa-bed"></i> &nbsp;&nbsp;- &nbsp;
                {Object.keys(item.config).map((config, i) => {
                  return (
                    <div key={config}>
                      {config}&nbsp;
                      {i !== Object.keys(item.config).length - 1 && "/"}
                    </div>
                  );
                })}
              </div>
              {type !== "project" && (
                <div>
                  <div className="carpet">Area - {item.carpet} sqft</div>
                  {type === "buy" && (
                    <div className="age">Age - {item.age} years</div>
                  )}
                  {type === "rent" && (
                    <div className="deposit">Deposit - {item.deposit} </div>
                  )}
                </div>
              )}

              <div className="price">
                <i className="fas fa-rupee-sign"></i>
                &nbsp;
                {p} {text}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Listing = styled(Body)`
  padding: 1rem;
  .item {
    display: flex;
    /* justify-content: flex-start; */
    justify-content: stretch;
    align-items: stretch;
    /* border: 1px solid #ccc; */
    background-color: #fff;
    box-shadow: 0 0 2px #000;
    /* background-color: ${(props) => props.theme.colors.a + "25"}; */
    /* padding: 1rem; */
    /* margin: 1rem; */
    height: 8rem;
    cursor: pointer;

    .img {
      width: 10rem;
      /* height: 8rem; */
      height: 100%;
      border: 2px solid #555;
      background-size: cover;
    }
    .wrap {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 1rem;
    }
    .title {
      color: ${(props) => props.theme.colors.a};
      font-size: ${(props) => props.theme.size.h4};
      font-weight: 600;
    }
    .location {
      display: flex;
    }
    .config {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.colors.a + "c0"};
      div {
        color: ${(props) => props.theme.colors.b + "90"};
        font-weight: 600;
        /* margin-right: 1rem; */
      }
      /* justify-content: ; */
    }
    .price {
      font-family: ${(props) => props.theme.family.b};
      color: ${(props) => props.theme.colors.b + "e0"};
      font-size: ${(props) => props.theme.size.h4};
      font-weight: 600;
      padding: 2px;
      .fas {
        color: ${(props) => props.theme.colors.b + "c0"};
        font-size: 1.2em;
      }
    }
  }
`;

export default Listing;
