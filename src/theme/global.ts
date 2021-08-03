import { DefaultTheme } from "styled-components";

let theme: DefaultTheme = {
  family: {
    a: "Source Sans Pro",
    b: "Lato",
    c: "Limelight",
  },
  colors: {
    a: "#8e4ce3",
    b: "#141823",
    c: "#fcfcfc", // light
  },
  size: {
    h1: "4rem",
    h2: "2.5rem",
    h3: "1.8rem",
    h4: "1.2rem",
    h5: "0.9rem",
    // h5: "1rem" ,
  },
  breakpoint: {
    sm: "max-width: 640px",
    md: "max-width: 1024px",
    lg: "max-width: 1536px",
    xl: "min-width: 1537px",
    value: {
      sm: 640,
      md: 1024,
      lg: 1536,
    },
    // landscape: '(min-width: 640px) and (max-width: 1024px)',
    // 768px
    // 1280px
  },
};

export default theme;
