import { INITIAL_ADS, ADD_AD } from "../types/types";

export const initialState = {
  ads: [],
  title: "",
  body: "",
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_ADS:
      return {
        ...state,
        ads: action.payload.initialAds,
      };

    case ADD_AD:
      return {
        ...state,
        ads: [...state.ads, action.payload.newAd],
      };

    default:
      return state;
  }
};

export default reducer;
