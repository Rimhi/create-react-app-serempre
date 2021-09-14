import useHelpers from "../../../helpers";
import useStrings from "../../../strings";
import useInitialStates from "../../initialStates";

const useMovieExampleReducers = () => {
  const { useMovieExampleTypes } = useStrings();
  const { GET_MOVIE_NUMBER_1, GET_MOVIE_NUMBER_2, GET_MOVIE_NUMBER_3 } = useMovieExampleTypes();

  const { useCreateReducer } = useHelpers();
  const { createReducer } = useCreateReducer();

  const { useMoviExampleInitialStates } = useInitialStates();
  const { initialStateMovie } = useMoviExampleInitialStates();

  const movieNumberOne = createReducer(initialStateMovie, {
    [GET_MOVIE_NUMBER_1](state, action) {
      const data = action.payload;
      return {
        ...state,
        ...data,
      };
    },
  });

  const movieNumberTwo = createReducer(initialStateMovie, {
    [GET_MOVIE_NUMBER_2](state, action) {
      const data = action.payload;
      return {
        ...state,
        ...data,
      };
    },
  });

  const movieNumberThree = createReducer(initialStateMovie, {
    [GET_MOVIE_NUMBER_3](state, action) {
      const data = action.payload;
      return {
        ...state,
        ...data,
      };
    },
  });

  return {
    movieNumberOne,
    movieNumberTwo,
    movieNumberThree,
  };
};

export default useMovieExampleReducers;
