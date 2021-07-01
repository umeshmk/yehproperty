// import React from "react";

import Header from "../features/header";
import Sections from "../features/sections/Sections";

import { useEffect } from "react";
import { usePageTitle } from "../utility/usePageTitle";

function Welcome() {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle("Yehproperty - Get Directions.Get Home in India");
  }, [setPageTitle]);

  return (
    <div>
      <Header />
      <Sections />
    </div>
  );
}

export default Welcome;
