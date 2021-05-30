import React, { useEffect } from "react";
import styled from "styled-components";
import { IStyled } from "../../types";
import { Dropdown, Button } from "../../elements";
import Places from "../maps/Places";

const StyledDropdown = styled(Dropdown)`
  width: 8rem;
  border: none;
`;

const Body = ({ className }: IStyled) => {
  const options = { Project: "Project", Buy: "Buy", Rent: "Rent" };

  // useEffect(() => {}, []);

  const handleClick = (e: React.SyntheticEvent<EventTarget>) => {
    console.log("clicked search", e);
  };

  return (
    <div className={className}>
      <div className="places-wrap">
        <Places />
      </div>
      <StyledDropdown options={options} />
      <Button onClick={handleClick}>Search</Button>
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
