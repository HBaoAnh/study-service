import * as _TypesModal from "../_constants/modalForm";

const initialState = {
  openModal: false,
  openTransfer: false,
  isOpenYear: false,
  isOpenClass: false,
  isOpenSubject: false,
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
        openTransfer: false,
        isOpenYear: false,
        isOpenClass: false,
        isOpenSubject: false,
      };

    case _TypesModal.SHOW_MODAL_TRANSFER:
      return {
        ...state,
        openTransfer: true,
      };

    case _TypesModal.SHOW_MODAL_YEAR:
      return {
        ...state,
        isOpenYear: true,
      };

    case _TypesModal.SHOW_MODAL_CLASS:
      return {
        ...state,
        isOpenClass: true,
      };

    case _TypesModal.SHOW_MODAL_SUBJECT:
      return {
        ...state,
        isOpenSubject: true,
      };

    default:
      return state;
  }
};
export default reducer;
