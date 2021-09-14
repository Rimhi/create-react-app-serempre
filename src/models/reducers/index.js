import { combineReducers } from "redux";
import useMovieExampleReducers from "./movieExample";

const useReducers = () => {
  const { movieNumberOne, movieNumberTwo, movieNumberThree } = useMovieExampleReducers();
  return combineReducers({
    movieNumberOne,
    movieNumberTwo,
    movieNumberThree,
  });
};

export default useReducers;
