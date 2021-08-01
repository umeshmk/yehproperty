import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IStyled, PropertyType } from "../../types";
import { Dropdown, Button } from "../../elements";
import Places from "./Places";
import { ChangeEvent } from "places.js";

const StyledDropdown = styled(Dropdown)`
  width: 8rem;
  border: none;

  @media all and (${(props) => props.theme.breakpoint.sm}) {
    width: 100%;
  }
`;

type Options = PropertyType["type"];

const options: Options[] = ["project", "buy", "rent"];

const Body = ({ className }: IStyled) => {
  const [coords, setCoords] = useState({ lat: 19.1388, lng: 72.8353 }); // Mumbai coords
  const [selected, setSelected] = useState<Options>(options[0]);

  const param = `type=${selected}&lat=${coords.lat}&lng=${coords.lng}`;

  const handleChange = (e: ChangeEvent) => {
    setCoords(e.suggestion.latlng);
  };

  const handleDropdownChange = (v: string) => {
    setSelected(v as Options);
  };

  return (
    <div className={className}>
      <div className="places-wrap">
        <Places handleChange={handleChange} />
      </div>
      <StyledDropdown options={options} handleChange={handleDropdownChange} />
      <Button className="btn" to={"/search?" + param}>
        Search
      </Button>
    </div>
  );
};

const Search = styled(Body)`
  width: 40%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  /* flex-wrap: wrap; */
  padding: 3rem 4rem;
  background-color: ${(props) => props.theme.colors.c + "ff"};
  box-shadow: 0px 0px 40px #00000055;

  .places-wrap {
    flex: 2;
  }

  @media all and (${(props) => props.theme.breakpoint.sm}) {
    width: 100%;
    padding: 1rem;
    display: block;

    .places-wrap {
      width: 100%;
      margin: 1rem 0 5px 0;
    }
    .btn {
      margin: 2rem 0 0 0;
      display: block;
      width: 100%;
    }
  }
`;

export default Search;
