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

import { getPropertyAsync, selectDetailRent } from "../reducers/detailSlice";
import AddOns from "./AddOns";
import Gallery from "./Gallery";
import { calculatePrice } from "../../utility/calculatePrice";

interface IProps extends IStyled {
  id: number;
}

const Body = ({ className, id }: IProps) => {
  const dispatch = useAppDispatch();
  const rent = useAppSelector(selectDetailRent);
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    dispatch(getPropertyAsync({ type: "rent", id: id }));
  }, [id]);

  useEffect(() => {
    if (rent) setPageTitle(rent.title);
  }, [rent, setPageTitle]);

  if (!rent) return <></>;

  const {
    title,
    // location,
    type,
    floors,
    onFloors,
    deposit,
    config,
    images,
    address,
    about,
    highlights,
    configDetails,
    addOns,
    owner,
    coords,
  } = rent;

  const { p, text } = calculatePrice(deposit);
  const features = {
    type,
    "Carpet area": configDetails.carpet + " sqft",
    bedrooms: Object.keys(config)[0],
    baths: configDetails.baths,
    floor: onFloors + " / " + floors,
    deposit: p + " " + text,
  };

  return (
    <div className={className}>
      <TitleBig className="title" title={title} owner={owner.name} />

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

const Rent = styled(Body)`
  width: 80%;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;

  .title {
    font-size: ${(props) => props.theme.size.h2};
  }
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

  @media all and (${(props) => props.theme.breakpoint.sm}) {
    width: 100%;

    .features {
      padding: 1rem;
    }

    q {
      width: 100%;
    }
    .about,
    .highlights {
      padding: 0 2rem;
    }
    .highlights {
      padding-top: 1rem;
      justify-content: start;
    }
    .map {
      width: 90%;
    }
  }
`;

export default Rent;
