import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    family: {
      a: string;
      b: string;
      c: string;
    };
    colors: {
      a: string;
      b: string;
      c: string;
    };
    size: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
    };
    breakpoint: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      value: {
        sm: number;
        md: number;
        lg: number;
      };
    };
  }
}
