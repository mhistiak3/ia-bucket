import { ADD_DATA, FAIL_DATA, LOADING, LOAD_DATA } from "../constent";

const initialState = {
  bucket: [],
  loading: false,
};

export const firestoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        bucket: action.payload,
        loading: false,
      };
    case ADD_DATA:
      return {
        ...state,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case FAIL_DATA:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
