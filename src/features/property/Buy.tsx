import { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  FeatureList,
  LocationLong,
  Text,
  TitleBig,
  Price,
} from "../../elements";
import { IStyled } from "../../types";
import { usePageTitle } from "../../utility/usePageTitle";
import MapMarker from "./MapMarker";

import { getPropertyAsync, selectDetailBuy } from "../reducers/detailSlice";
import AddOns from "./AddOns";
import Gallery from "./Gallery";

interface IProps extends IStyled {
  id: number;
}

const Body = ({ className, id }: IProps) => {
  const dispatch = useAppDispatch();
  const buy = useAppSelector(selectDetailBuy);
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    dispatch(getPropertyAsync({ type: "buy", id: id }));
  }, [id]);

  useEffect(() => {
    if (buy) setPageTitle(buy.title);
  }, [buy, setPageTitle]);

  if (!buy) return <></>;

  const {
    title,
    // location,
    type,
    floors,
    onFloors,
    age,
    config,
    images,
    address,
    about,
    highlights,
    configDetails,
    addOns,
    owner,
    coords,
  } = buy;

  const features = {
    type,
    "Carpet area": configDetails.carpet + " sqft",
    bedrooms: Object.keys(config)[0],
    baths: configDetails.baths,
    floor: onFloors + " / " + floors,
    age: age + " years",
  };

  return (
    <div className={className}>
      <TitleBig title={title} owner={owner.name} />

      <LocationLong>
        {`${address.line}, ${address.locality}, ${address.city}, ${address.state} - ${address.pincode}`}
      </LocationLong>

      <Price className="price" price={Object.values(config)[0]}></Price>
      <FeatureList className="features" list={features} />

      <q>
        <Text className="about">{about}</Text>
        <Text className="highlights">
          {highlights.map((i) => {
            return <li key={i}>{i}</li>;
          })}
        </Text>
      </q>

      <Gallery images={images} />
      <AddOns list={addOns} />
      <div className="map">
        <MapMarker coords={coords} title={title} />
      </div>
    </div>
  );
};

const Buy = styled(Body)`
  width: 80%;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;

  .price {
    margin-top: 2rem;
  }

  .features {
    width: 100%;
    padding: 3rem 5rem;
    margin: 3rem 0;
  }

  q {
    width: 70%;
    font-weight: 800;
    font-size: ${(props) => props.theme.size.h1};
    color: ${(props) => props.theme.colors.a};
  }

  q::after {
    display: block;
    text-align: right;
  }
  .about,
  .highlights {
    padding: 1rem 4rem;
    margin: 0;
  }

  .highlights {
    /* width: 50%; */
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    li {
      /* color: ${(props) => props.theme.colors.a + "d0"}; */
      padding-right: 3rem;
    }
  }

  .carousel {
    height: 40vh;
    /* width: 60vw; */
  }

  .map {
    width: 60%;
    height: 20rem;
  }
`;

export default Buy;
