import * as actionTypes from "../actionType/actionType";

const initialState = {
  data: [],
};

export default function moviesReducer(state = initialState, action) {
  // eslint-disable-next-line
  switch (action.type) {
    case actionTypes.MOVIES_TRENDING:
      return { ...state, AllMovies: action.payload };
    case actionTypes.PRODUCTS:
      return { ...state, AllProduct: action.payload };

    default:
      return state;
  }
}
