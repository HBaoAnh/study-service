import * as _TypesModal from "../_constants/modalForm";

export const showModal = () => ({
  type: _TypesModal.SHOW_MODAL,
});

export const hideModal = () => ({
  type: _TypesModal.HIDE_MODAL,
});
