import * as _typeActions from "../_constants/subject";

export const getAllSubject = () => {
  return {
    type: _typeActions.GET_ALL_SUBJECT,
  };
};
export const getAllSubjectSuccess = (data) => {
  return {
    type: _typeActions.GET_ALL_SUBJECT_SUC,
    payload: data,
  };
};
export const saveSubject = (data) => {
  return {
    type: _typeActions.SAVE_SUBJECT,
    payload: data,
  };
};
export const saveSubjectSuccess = (data, isAdd) => {
  return {
    type: _typeActions.SAVE_SUBJECT_SUC,
    payload: {
      data,
      isAdd,
    },
  };
};
export const deleteSubject = (subjectId) => {
  return {
    type: _typeActions.DELETE_SUBJECT,
    payload: subjectId,
  };
};
export const deleteSubjectSuccess = (subjectId) => {
  return {
    type: _typeActions.DELETE_SUBJECT_SUC,
    payload: { subjectId },
  };
};
export const setSubjectEditing = (dataEditing) => {
  return {
    type: _typeActions.SET_SUBJECT_EDITING,
    payload: { dataEditing },
  };
};
