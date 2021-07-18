/// <reference types="react-scripts" />
/// <reference types="google.maps" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    REACT_APP_ROUTER_BASENAME: string;
    REACT_APP_IMAGE_SM_URL: string;
    REACT_APP_IMAGE_MD_URL: string;
    REACT_APP_IMAGE_LG_URL: string;
  }
}
