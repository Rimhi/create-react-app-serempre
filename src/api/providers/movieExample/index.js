import axios from "axios";

const useMovieExampleProviders = () => {
  const getMovieNumberOneProvider = () => {
    return axios({
      method: "GET",
      url: `/movie/566525`,
    });
  };

  const getMovieNumberTwoProvider = () => {
    return axios({
      method: "GET",
      url: `/movie/482373`,
    });
  };

  const getMovieNumberThreeProvider = () => {
    return axios({
      method: "GET",
      url: `/movie/595743`,
    });
  };

  return {
    getMovieNumberOneProvider,
    getMovieNumberTwoProvider,
    getMovieNumberThreeProvider,
  };
};

export default useMovieExampleProviders;
