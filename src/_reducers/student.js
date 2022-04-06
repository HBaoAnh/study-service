import * as _typeActions from "../_constants/student";

const initialState = {
  listStudent: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case _typeActions.DELETE_STUDENT: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
export default reducer;
