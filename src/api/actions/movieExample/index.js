import useStrings from "../../../strings";
import useServices from "../../services";

const useMovieExampleActions = () => {
  // Strings
  const { useMovieExampleTypes } = useStrings();
  const { GET_MOVIE_NUMBER_1, GET_MOVIE_NUMBER_2, GET_MOVIE_NUMBER_3 } = useMovieExampleTypes();

  // Services
  const { useMovieExampleServices } = useServices();
  const { getMovieNumberOneService, getMovieNumberTwoService, getMovieNumberThreeService } =
    useMovieExampleServices();

  // Actions
  const actGetMovieNumberOne = () => async (dispatch) => {
    try {
      const resp = await getMovieNumberOneService();
      dispatch({
        type: GET_MOVIE_NUMBER_1,
        payload: resp.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const actGetMovieNumberTwo = () => async (dispatch) => {
    try {
      const resp = await getMovieNumberTwoService();
      dispatch({
        type: GET_MOVIE_NUMBER_2,
        payload: resp.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const actGetMovieNumberThree = () => async (dispatch) => {
    try {
      const resp = await getMovieNumberThreeService();
      dispatch({
        type: GET_MOVIE_NUMBER_3,
        payload: resp.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    actGetMovieNumberOne,
    actGetMovieNumberTwo,
    actGetMovieNumberThree,
  };
};

export default useMovieExampleActions;
