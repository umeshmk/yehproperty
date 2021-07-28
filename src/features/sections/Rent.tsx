import { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  Button,
  Carousel,
  FeatureList,
  Location,
  Price,
  Title,
  ConfigPrice,
} from "../../elements";
import { IStyled } from "../../types";
import { calculatePrice } from "../../utility/calculatePrice";
import { _pick } from "../../utility/lodash";
import { slugify } from "../../utility/slugify";
import { getPropertyAsync, selectActiveRent } from "../reducers/activeSlice";

interface IProps extends IStyled {
  pid: number | null;
}

const Body = ({ className, pid }: IProps) => {
  const dispatch = useAppDispatch();
  const rent = useAppSelector(selectActiveRent);

  useEffect(() => {
    if (pid) {
      dispatch(getPropertyAsync({ type: "rent", id: pid }));
    }
  }, [pid, dispatch]);

  if (rent === null) return <></>;

  const features: { [name: string]: string | number } = _pick(rent as {}, [
    "type",
  ]);
  features["area"] = rent.configDetails.carpet + " sqft";
  features["floor"] = rent.onFloors + " / " + rent.floors;
  features["baths"] = rent.configDetails.baths;
  let { p, text } = calculatePrice(rent.deposit);
  features["deposit"] = p + text;

  return (
    <div className={className}>
      <div className="carousel">
        <Carousel imageList={rent.images} />
        <Location className="location">{rent.location}</Location>
      </div>
      <div className="content">
        <div className="content-header">
          <div className="title-wrap">
            <Title title={rent.title} owner={`By ${rent.owner.name}`} />
          </div>
          <div className="price-wrap">
            <Price price={Object.values(rent.config)[0]} />
          </div>
        </div>
        <ConfigPrice list={rent.config} />
        <Button
          className="details"
          to={`/rent/${rent.id}/${slugify(rent.title)}`}
        >
          Details
        </Button>

        <FeatureList list={features as {}} />
      </div>
    </div>
  );
};

const Buy = styled(Body)`
  background-color: #fff;
  border: 1px solid;
  /* width: 70%;
  height: 60%; */
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  /* justify-content: center; */

  .carousel {
    /* height: 100%; */
    width: 50%;
    position: relative;
  }

  .location {
    position: absolute;
    /* font-size: ${(props) => props.theme.size.h4}; */
    top: 0;
    left: 0;
  }

  .content {
    /* padding: 1rem; */
    /* border: 1px solid red; */
    width: 50%;
    /* padding-left: 1rem; */
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: space-between;
    /* padding-bottom: 10rem; */
  }
  .content-header {
    display: flex;
    padding-left: 1rem;
    /* border: 1px solid; */
    justify-content: space-between;
    align-items: flex-end;
    .title-wrap {
      overflow: hidden;
    }
    .price-wrap {
      min-width: 30%;
      text-align: right;
    }
  }

  .details {
    margin: 0 auto;
    width: 40%;
    margin-bottom: 1rem;
  }
`;
export default Buy;
