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
import { _pick } from "../../utility/lodash";
import { slugify } from "../../utility/slugify";
import { getPropertyAsync, selectActiveBuy } from "../reducers/activeSlice";

interface IProps extends IStyled {
  pid: number | null;
}

const Body = ({ className, pid }: IProps) => {
  const dispatch = useAppDispatch();
  const buy = useAppSelector(selectActiveBuy);

  useEffect(() => {
    if (pid) {
      dispatch(getPropertyAsync({ type: "buy", id: pid }));
    }
  }, [pid, dispatch]);

  if (buy === null) return <></>;

  const features: { [name: string]: string | number } = _pick(buy as {}, [
    "type",
  ]);

  features["area"] = buy.configDetails.carpet + " sqft";
  features["floor"] = buy.onFloors + " / " + buy.floors;
  features["baths"] = buy.configDetails.baths;
  features["age"] = buy.age + " years";

  return (
    <div className={className}>
      <div className="carousel">
        <Carousel imageList={buy.images} />
        <Location className="location">{buy.location}</Location>
      </div>
      <div className="content">
        <div className="content-header">
          <div className="title-wrap">
            <Title title={buy.title} owner={`By ${buy.owner.name}`} />
          </div>
          <div className="price-wrap">
            <Price className="price" price={Object.values(buy.config)[0]} />
          </div>
        </div>
        <ConfigPrice list={buy.config} />
        <Button className="details" to={`/buy/${buy.id}/${slugify(buy.title)}`}>
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

  @media all and (${(props) => props.theme.breakpoint.sm}) {
    flex-wrap: wrap;
    /* border: 2px solid red; */

    .carousel {
      width: 100%;
      height: 40vh;
    }
    .content {
      width: 100%;
    }
    .content-header {
      /* width: 100%; */
      flex-wrap: wrap;
      padding: 1rem;
      .price-wrap {
        display: none;
      }
    }
  }
`;
export default Buy;
