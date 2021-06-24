import { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  Carousel,
  ConfigPrice,
  FeatureList,
  Location,
  LocationSmall,
  LocationLong,
  Text,
  Title,
  TitleBig,
  Rera,
} from "../../elements";
import { IStyled } from "../../types";
import { _pick } from "../../utility/lodash";
import { usePageTitle } from "../../utility/usePageTitle";

import { getPropertyAsync, selectActiveProject } from "../reducers/listSlice";
import AddOns from "./AddOns";
import ConfigDetails from "./ConfigDetails";
import Developer from "./Developer";
import Gallery from "./Gallery";

interface IProps extends IStyled {
  id: number;
}

const Body = ({ className, id }: IProps) => {
  const dispatch = useAppDispatch();
  const project = useAppSelector(selectActiveProject);
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
    location,
    // type,
    // possession,
    // area,
    // floors,
    // units,
    // booked,
    config,
    images,
    address,
    rera,
    about,
    highlights,
    configDetails,
    addOns,
    developer,
  } = project;

  const features = _pick(project, [
    "type",
    "possession",
    "area",
    "floors",
    "units",
    "booked",
  ]);

  return (
    <div className={className}>
      <Rera data={rera} />
      <TitleBig title={title} owner={developer.name} />

      <LocationLong>
        {`${address.line}, ${address.locality}, ${address.city}, ${address.state} - ${address.pincode}`}
      </LocationLong>

      <FeatureList className="features" list={features as {}} />
      <ConfigPrice className="configPrice" list={config} />

      <div className="configDetails">
        {Object.entries(configDetails).map((i) => {
          return (
            <ConfigDetails config={i[0]} details={i[1]} price={config[i[0]]} />
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
      {/* <h3>{developer}</h3> */}
    </div>
  );
};

const Project = styled(Body)`
  width: 80%;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;

  .features {
    width: 100%;
    padding: 3rem 5rem;
    margin: 3rem 0;
  }

  .configPrice {
    width: 100%;
    justify-content: space-around;
    > li {
      /* border: 1px solid; */
    }
  }

  .configDetails {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 5rem;
    padding: 0 1rem;

    > div {
      /* border: 1px solid; */
      /* padding-left: 3rem; */
    }
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
`;

export default Project;
