const useMoviExampleInitialStates = () => {
  const initialStateMovie = {
    adult: false,
    backdrop_path: "",
    genre_ids: [],
    id: null,
    original_language: "",
    original_title: "",
    overview: "",
    popularity: null,
    poster_path: "",
    release_date: "",
    title: "",
    video: false,
    vote_average: null,
    vote_count: null,
  };
  return {
    initialStateMovie,
  };
};

export default useMoviExampleInitialStates;
