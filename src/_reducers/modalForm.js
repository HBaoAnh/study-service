import * as _TypesModal from "../_constants/modalForm";

const initialState = {
  openModal: false,
  openTransfer: false,
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

      case _TypesModal.SHOW_MODAL_TRANSFER:
        return {
          ...state,
          openTransfer: true,
        };
  
      case _TypesModal.HIDE_MODAL_TRANSFER:
        return {
          ...state,
          openTransfer: false,
        };
  
    default:
      return state;
  }
};
export default reducer;
