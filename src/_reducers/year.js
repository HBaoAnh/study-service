import * as _typeActions from "../_constants/year";
import YearModel from "../model/year.model";

const initialState = {
  listYear: [],
  yearEditing: new YearModel(),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case _typeActions.GET_ALL_YEAR: {
      return {
        ...state,
        listYear: [],
      };
    }
    case _typeActions.GET_ALL_YEAR_SUC: {
      const { data } = action.payload;
      return {
        ...state,
        listYear: data,
      };
    }
    case _typeActions.SET_YEAR_EDITING: {
      const { dataEditing } = action.payload;
      return {
        ...state,
        yearEditing: new YearModel(dataEditing),
      };
    }
    case _typeActions.SAVE_YEAR: {
      return {
        ...state,
        yearEditing: new YearModel(),
      };
    }
    case _typeActions.SAVE_YEAR_SUC: {
      const { data, isAdd } = action.payload;
      let { listYear } = state;
      if (isAdd) {
        listYear = [...listYear, data];
      } else {
        listYear = listYear.map((o) => {
          if (o.id === data.id) {
            o = { ...data };
          }
          return o;
        });
      }
      return {
        ...state,
        listYear,
      };
    }
    case _typeActions.DELETE_YEAR_SUC: {
      const { yearId } = action.payload;
      return {
        ...state,
        listYear: state.listYear.filter((o) => o.id !== yearId),
      };
    }
    default:
      return state;
  }
};
export default reducer;
