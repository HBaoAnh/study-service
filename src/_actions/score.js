import * as _typeActions from "../_constants/score";

export const getScoreByStudentId = (data) => {
  return {
    type: _typeActions.GET_SCORE_BY_STUDENT_ID,
    payload: {
      data,
    },
  };
};

export const getScoreByStudentIdSuccess = (data) => {
  return {
    type: _typeActions.GET_SCORE_BY_STUDENT_ID_SUC,
    payload: {
      data,
    },
  };
};

export const setScoreEditing = (dataEditing) => {
  return {
    type: _typeActions.SET_SCORE_EDITING,
    payload: {
      dataEditing,
    },
  };
};

export const saveScoreStudent = (data) => {
  return {
    type: _typeActions.SAVE_SCORE_STUDENT,
    payload: data,
  };
};

export const saveScoreStudentSuccess = (data) => {
  return {
    type: _typeActions.SAVE_SCORE_STUDENT_SUC,
    payload: {
      data,
    },
  };
};

export const addScoreBegin = (data) => {
  return {
    type: _typeActions.ADD_SCORE_BEGIN,
    payload: {
      data,
    },
  };
};

export const addScoreBeginSuccess = (data) => {
  return {
    type: _typeActions.ADD_SCORE_BEGIN_SUC,
    payload: {
      data,
    }
  }
}