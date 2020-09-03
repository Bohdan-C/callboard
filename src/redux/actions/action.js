import axios from "axios";
import { ADS_FAIL, ADS_LOADING, ADS_SUCCESS } from "../types/types";

const loadingData = () => ({
  type: ADS_LOADING,
});

const successData = (data) => ({
  type: ADS_SUCCESS,
  payload: data,
});

const errorData = (error) => ({
  type: ADS_FAIL,
  payload: error,
});

const getAds = () => (dispatch) => {
    loadingData();
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => dispatch(successData(res.data)))
    .catch((error) => dispatch(errorData(error)))
    .finally(() => loadingData());
};

export { getAds };
