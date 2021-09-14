import { useEffect } from "react";
import useApi from "../../../api";
import useModels from "../../../models";

const useHome = () => {
  // Api
  const { useActions } = useApi();
  const { dispatch, useMovieExampleActions } = useActions();
  const { actGetMovieNumberOne } = useMovieExampleActions();

  // Models
  const { useSelectors } = useModels();
  const { useSelector, useMovieExampleSelectors } = useSelectors();
  const { movieNumberOneSelector } = useMovieExampleSelectors();
  const movieNumberOne = useSelector(movieNumberOneSelector);

  useEffect(() => {
    getMovieNumberOne();
    return () => {};
  }, []);

  const getMovieNumberOne = () => dispatch(actGetMovieNumberOne());

  return {
    movieNumberOne,
  };
};

export default useHome;
