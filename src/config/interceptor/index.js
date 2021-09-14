import { useEffect } from "react";
import axios from "axios";

const useInterceptor = (store) => {
  const handleRequestSuccess = (request) => {
    // const state = store.getState();
    // const { token } = state.user;
    // request.headers["token"] = token; // Example 1
    // request.headers.authorization = `Bearer ${token}`; // Example 2
    request.params["api_key"] = "4b84dfdc42cd3945865882e1beedee43"; // Remove
    request.params["language"] = "en-US"; // Remove
    request.headers["Content-Type"] = "application/json";
    request.headers["accept"] = "application/json";
    return request;
  };
  const handleRequestError = (error) => {
    console.log(`REQUEST ERROR! => ${error}`);
  };

  const handleResponseSuccess = (response) => {
    return response;
  };

  const handleResponseError = (error) => {
    console.log(`RESPONSE ERROR! => ${error}`);
  };

  useEffect(() => {
    axios.defaults.baseURL = process.env.REACT_APP_API_URL;
    axios.defaults.params = {};
    axios.interceptors.request.use(handleRequestSuccess, handleRequestError);
    axios.interceptors.response.use(handleResponseSuccess, handleResponseError);
  }, []);
};

export default useInterceptor;
