// used in redux reducers

export const baseApiUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_HOSTING
    : "/api/";
