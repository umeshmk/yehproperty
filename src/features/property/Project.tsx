import { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  ConfigPrice,
  FeatureList,
  LocationLong,
  Text,
  TitleBig,
  Rera,
  Price,
} from "../../elements";
import { IStyled, BhkType } from "../../types";
import { usePageTitle } from "../../utility/usePageTitle";
import MapMarker from "./MapMarker";

import { getPropertyAsync, selectDetailProject } from "../reducers/detailSlice";
import AddOns from "./AddOns";
import ConfigDetails from "./ConfigDetails";
import Developer from "./Developer";
import Gallery from "./Gallery";

interface IProps extends IStyled {
  id: number;
}

const Body = ({ className, id }: IProps) => {
  const dispatch = useAppDispatch();
  const project = useAppSelector(selectDetailProject);
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    dispatch(getPropertyAsync({ type: "project", id: id }));
  }, [dispatch, id]);

  useEffect(() => {
    if (project) setPageTitle(project.title);
  }, [project, setPageTitle]);

  if (!project) return <></>;

  const {
    title,
    // location,
    type,
    possession,
    area,
    floors,
    units,
    booked,
    config,
    images,
    address,
    rera,
    about,
    highlights,
    configDetails,
    addOns,
    developer,
    coords,
  } = project;

  const features = {
    type,
    possession,
    area,
    floors,
    units,
    booked,
  };

  return (
    <div className={className}>
      <Rera data={rera} />
      <TitleBig title={title} owner={developer.name} />

      <LocationLong>
        {`${address.line}, ${address.locality}, ${address.city}, ${address.state} - ${address.pincode}`}
      </LocationLong>

      <Price className="price" price={Object.values(config)[0]}></Price>
      <FeatureList className="features" list={features} />
      <ConfigPrice className="configPrice" list={config} />

      <div className="configDetails">
        {Object.entries(configDetails).map((i, index) => {
          let price = config[i[0] as BhkType];

          return (
            <div key={index}>
              <ConfigDetails config={i[0]} details={i[1]} price={price} />
            </div>
          );
        })}
      </div>
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
      <Developer developer={developer} />
      <div className="map">
        <MapMarker coords={coords} title={title} />
      </div>
    </div>
  );
};

const Project = styled(Body)`
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

  .configPrice {
    width: 100%;
    justify-content: space-around;
  }

  .configDetails {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 5rem;
    padding: 0 1rem;
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

    .configDetails {
      flex-wrap: wrap;
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

export default Project;
