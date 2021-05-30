import { useState, useEffect, useRef } from "react";

export default function autocomplete(inputElement: HTMLInputElement) {
  // export default function useAutocomplete() {
  //   const [isVisible, setIsVisible] = useState(initialIsVisible);
  //   const inputRef = useRef<HTMLInputElement>(null);
  console.log("before");
  if (typeof google === "undefined") return;
  //   if (inputElement) return;
  console.log("after");

  //autocomplete
  let options = {
    // types: ['(cities)'],
    componentRestrictions: { country: "in" },
  };

  let a = new google.maps.places.Autocomplete(inputElement, options);

  // mumbai/ navimumbai / pune/ nashik bounds
  let defaultBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(18.145985976312204, 71.87679877343749),
    new google.maps.LatLng(20.22109830348931, 74.34872260156249)
  );

  a.setBounds(defaultBounds);

  //   return a;
}
