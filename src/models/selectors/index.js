import { useSelector } from "react-redux";
import useMovieExampleSelectors from "./movieExample";

const useSelectors = () => {
  return {
    useSelector,
    useMovieExampleSelectors,
  };
};

export default useSelectors;
