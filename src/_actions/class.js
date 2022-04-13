import * as _typeActions from "../_constants/class";

export const getAllClass = () => {
  return {
    type: _typeActions.GET_ALL_CLASS,
  };
};
export const getAllClassSuccess = (data) => {
  return {
    type: _typeActions.GET_ALL_CLASS_SUC,
    payload: data,
  };
};
export const saveClass = (data) => {
  return {
    type: _typeActions.SAVE_CLASS,
    payload: data,
  };
};
export const saveClassSuccess = (data, isAdd) => {
  return {
    type: _typeActions.SAVE_CLASS_SUC,
    payload: {
      data,
      isAdd,
    },
  };
};
export const deleteClass = (ClassId) => {
  return {
    type: _typeActions.DELETE_CLASS,
    payload: ClassId,
  };
};
export const deleteClassSuccess = (ClassId) => {
  return {
    type: _typeActions.DELETE_CLASS_SUC,
    payload: { ClassId },
  };
};
export const setClassEditing = (dataEditing) => {
  return {
    type: _typeActions.SET_CLASS_EDITING,
    payload: { dataEditing },
  };
};
