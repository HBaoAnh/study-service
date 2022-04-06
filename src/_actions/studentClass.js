import * as _typeActions from "../_constants/studentclass";

export const getStudentClass = (yearId, classId) => {
  return {
    type: _typeActions.GET_STUDENT_CLASS,
    payload: {
      yearId,
      classId,
    },
  };
};

export const getStudentClassSuc = (data) => {
  return {
    type: _typeActions.GET_STUDENT_CLASS_SUC,
    payload: { data },
  };
};
export const setStudentClassEditing = (dataEditing) => {
  return {
    type: _typeActions.SET_STUDENT_CLASS_EDITING,
    payload: {
      dataEditing,
    },
  };
};
export const saveStudentClass = (data) => {
  return {
    type: _typeActions.SAVE_STUDENT_CLASS,
    payload: data,
  };
};

export const saveStudentClassSuccess = (data, isAdd) => {
  return {
    type: _typeActions.SAVE_STUDENT_CLASS_SUC,
    payload: {
      data,
      isAdd,
    },
  };
};

export const deleteStudentClass = (data) => {
  return {
    type: _typeActions.DELETE_STUDENT_CLASS,
    payload: data,
  };
};

export const deleteStudentClassSuccess = (id) => {
  return {
    type: _typeActions.DELETE_STUDENT_CLASS_SUC,
    payload: {
      id,
    },
  };
};

export const transferStudentClass = (dataTransfer) => {
  return {
    type: _typeActions.TRANSFER_STUDENT_CLASS,
    payload: dataTransfer,
  };
};

export const transferStudentClassSuccess = (data) => {
  return {
    type: _typeActions.TRANSFER_STUDENT_CLASS_SUC,
    payload: {
      data,
    },
  };
};
