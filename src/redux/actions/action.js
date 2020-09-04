import { ADD_AD, INITIAL_ADS } from "../types/types";

export const initialAds = (ads) => ({
  type: INITIAL_ADS,
  payload: {
    initialAds: ads,
  },
});

export const addAdAction = (newAd) => ({
  type: ADD_AD,
  payload: {
    newAd,
  },
});
