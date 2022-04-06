import * as _TypesModal from "../_constants/modalForm";

export const showModal = () => ({
  type: _TypesModal.SHOW_MODAL,
});

export const hideModal = () => ({
  type: _TypesModal.HIDE_MODAL,
});

export const showModalTransfer = () => ({
  type: _TypesModal.SHOW_MODAL_TRANSFER,
});

export const hideModalTransfer = () => ({
  type: _TypesModal.HIDE_MODAL_TRANSFER,
});
