interface ThemeInterface {
  colors: {
    a: string;
    b: string;
  };
  size: {
    h1: string;
    h2: string;
    h3: string;
    h4: string;
  };
}

let theme: ThemeInterface = {
  colors: {
    a: "#8e4ce3",
    b: "#141823",
  },
  size: {
    h1: "4rem",
    h2: "2rem",
    h3: "1rem",
    h4: "0.5rem",
    // h5: "1rem" ,
  },
  // breakpoint: {
  // sm: "(max-width: 640px)",
  // md: "(max-width: 1024px)",
  // lg: "(max-width: 1536px)",
  // xl: "(min-width: 1536px)",
  // landscape: '(min-width: 640px) and (max-width: 1024px)',
  // 768px
  // 1280px
  // },
};

export default theme;
