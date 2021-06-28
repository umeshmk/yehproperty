import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IStyled, PropertyOptionsType } from "../../types";
import { Dropdown, Button } from "../../elements";
import Places from "../maps/Places";
import { ChangeEvent } from "places.js";

const StyledDropdown = styled(Dropdown)`
  width: 8rem;
  border: none;
`;

const options: PropertyOptionsType[] = ["project", "buy", "rent"];

const Body = ({ className }: IStyled) => {
  // const [searchUrl, setSearchUrl] = useState();
  const [coords, setCoords] = useState({ lat: 19.1388, lng: 72.8353 }); // Mumbai coords
  const [selected, setSelected] = useState<PropertyOptionsType>(options[0]);

  const param = `type=${selected}&lat=${coords.lat}&lng=${coords.lng}`;

  // useEffect(() => {}, []);

  const handleChange = (e: ChangeEvent) => {
    // console.log(e.suggestion);
    setCoords(e.suggestion.latlng);
  };

  const handleDropdownChange = (v: string) => {
    // if (options.includes(v)) {
    setSelected(v as PropertyOptionsType);
    // }
    console.log(v);
  };

  return (
    <div className={className}>
      <div className="places-wrap">
        <Places handleChange={handleChange} />
      </div>
      <StyledDropdown options={options} handleChange={handleDropdownChange} />
      <Button to={"/search?" + param}>Search</Button>
    </div>
  );
};

const Search = styled(Body)`
  width: 40%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  padding: 3rem 4rem;
  /* border-radius: 3rem; */
  background-color: ${(props) => props.theme.colors.c + "ff"};
  box-shadow: 0px 0px 40px #00000055;
  /* box-shadow: 0px 0px 20px ${(props) => props.theme.colors.a + "bb"}; */

  & .places-wrap {
    /* width: 60%; */
    flex: 2;
    /* display: inline-block; */
  }
`;

export default Search;
