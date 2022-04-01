import * as _TypesModal from "../_constants/modalForm";

const initialState = {
  openModal: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case _TypesModal.SHOW_MODAL:
      return {
        ...state,
        openModal: true,
      };

    case _TypesModal.HIDE_MODAL:
      return {
        ...state,
        openModal: false,
      };

    default:
      return state;
  }
};
export default reducer;
