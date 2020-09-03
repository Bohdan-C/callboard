import { ADS_FAIL, ADS_LOADING, ADS_SUCCESS, AD_ADD_SUCCESS } from "../types/types";

export const initialState = {
    ads: [],
    title: '',
    body: '',
    isLoading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADS_LOADING:
            return { ...state, isLoading: !state.isLoading };

        case ADS_SUCCESS:
            return { ...state, ads: [...action.payload] };

        case ADS_FAIL:
            return state;

        case AD_ADD_SUCCESS:
            return { ...state, title: '', body: '' };

        default:
            return state;
    }
};

export default reducer;