import React, { useEffect } from "react";
import places, { ChangeEvent } from "places.js";
import styled from "styled-components";
import { IStyled } from "../../types";
import svg from "./pin.svg";

interface IProps extends IStyled {
  handleChange: (e: ChangeEvent) => void;
}

const Body = ({ className, handleChange }: IProps) => {
  const ref = React.createRef<HTMLInputElement>();

  useEffect(() => {
    let configure = {
      countries: ["in"],
      language: "en-us",
      aroundLatLng: "18.9387,72.8353",
      insideBoundingBox:
        "18.145985976312204, 71.87679877343749, 20.22109830348931, 74.34872260156249",
    };
    let placesAutocomplete = places({
      // appId: 'YOUR_PLACES_APP_ID',
      // apiKey: 'YOUR_PLACES_API_KEY',
      container: ref.current as HTMLInputElement,
    });

    placesAutocomplete.configure(configure);
    // placesAutocomplete.on("change", (e) => console.log(e.suggestion));
    // placesAutocomplete.on("change", (e) => console.log(typeof e));
    placesAutocomplete.on("change", handleChange);
  }, [ref, handleChange]);

  const handleFocus = (e: React.SyntheticEvent<EventTarget>) => {
    (e.target as HTMLInputElement).value = "";
  };

  return (
    <div className={className}>
      <input
        ref={ref}
        type="search"
        id="address-input"
        placeholder="Mumbai, Maharashtra"
        onFocus={handleFocus}
      />
    </div>
  );
};

const Places = styled(Body)`
  background-color: ${(props) => props.theme.colors.c};
  width: 100%;
  color: ${(props) => props.theme.colors.a};

  & input {
    padding: 1rem;
    font-weight: 800;
    filter: brightness(80%);
    /* border: none; */
    height: auto;
  }

  & .ap-suggestion-icon {
    display: none;
  }

  & .ap-suggestion::before {
    content: "aaa";
    color: transparent;
    width: 1rem;
    height: 1rem;
    background-image: url(${svg});
    background-repeat: no-repeat;
  }
`;

export default Places;
