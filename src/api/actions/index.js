import { useDispatch } from "react-redux";
import useMovieExampleActions from "./movieExample";

const useActions = () => {
  const dispatch = useDispatch();
  return {
    dispatch,
    useMovieExampleActions,
  };
};

export default useActions;
