import * as _TypesUI from "../_constants/ui";

const initialState = {
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case _TypesUI.SHOW_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case _TypesUI.HIDE_LOADING: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};
export default reducer;
