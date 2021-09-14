import { trackPromise } from "react-promise-tracker";
import useProviders from "../../providers";

const useMovieExampleServices = () => {
  const { useMovieExampleProviders } = useProviders();
  const { getMovieNumberOneProvider, getMovieNumberTwoProvider, getMovieNumberThreeProvider } =
    useMovieExampleProviders();

  const getMovieNumberOneService = () => {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(trackPromise(getMovieNumberOneProvider()));
      } catch (error) {
        reject(error);
      }
    });
  };

  const getMovieNumberTwoService = () => {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(trackPromise(getMovieNumberTwoProvider()));
      } catch (error) {
        reject(error);
      }
    });
  };

  const getMovieNumberThreeService = () => {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(trackPromise(getMovieNumberThreeProvider()));
      } catch (error) {
        reject(error);
      }
    });
  };

  return {
    getMovieNumberOneService,
    getMovieNumberTwoService,
    getMovieNumberThreeService,
  };
};

export default useMovieExampleServices;
