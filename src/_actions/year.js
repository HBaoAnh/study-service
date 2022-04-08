import * as _typeActions from "../_constants/year";

export const getAllYear = () => {
  return {
    type: _typeActions.GET_ALL_YEAR,
  };
};
export const getAllYearSuccess = (data) => {
  return {
    type: _typeActions.GET_ALL_YEAR_SUC,
    payload: data,
  };
};
export const saveYear = (data) => {
  return {
    type: _typeActions.SAVE_YEAR,
    payload: data,
  };
};
export const saveYearSuccess = (data, isAdd) => {
  return {
    type: _typeActions.SAVE_YEAR_SUC,
    payload: {
      data,
      isAdd,
    },
  };
};
export const deleteYear = (yearId) => {
  return {
    type: _typeActions.DELETE_YEAR,
    payload: yearId,
  };
};
export const deleteYearSuccess = (yearId) => {
  return {
    type: _typeActions.DELETE_YEAR_SUC,
    payload: { yearId },
  };
};
export const setYearEditing = (dataEditing) => {
  return {
    type: _typeActions.SET_YEAR_EDITING,
    payload: { dataEditing },
  };
};
