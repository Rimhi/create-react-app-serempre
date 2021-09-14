import useHelpers from "../../../helpers";

const useMovieExampleSelectors = () => {
  const { useCreateSelector } = useHelpers();
  const { createSelector } = useCreateSelector();

  const movieNumberOneSelector = createSelector(
    (state) => state.movieNumberOne,
    (movieNumberOne) => movieNumberOne
  );

  const movieNumberTwoSelector = createSelector(
    (state) => state.movieNumberTwo,
    (movieNumberTwo) => movieNumberTwo
  );

  const movieNumberThreeSelector = createSelector(
    (state) => state.movieNumberThree,
    (movieNumberThree) => movieNumberThree
  );

  return {
    movieNumberOneSelector,
    movieNumberTwoSelector,
    movieNumberThreeSelector,
  };
};

export default useMovieExampleSelectors;
