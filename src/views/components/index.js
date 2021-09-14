import { lazy } from "react";

const MovieInfoOne = lazy(() => import("./MovieInfoOne"));
const MovieInfoTwo = lazy(() => import("./MovieInfoTwo"));
const MovieInfoThree = lazy(() => import("./MovieInfoThree"));

const useComponents = () => {
  return {
    MovieInfoOne,
    MovieInfoTwo,
    MovieInfoThree,
  };
};

export default useComponents;
