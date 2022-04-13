import * as _typeActions from "../_constants/class";
import ClassModel from "../model/class.model";

const initialState = {
  listClass: [],
  classEditing: new ClassModel(),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case _typeActions.GET_ALL_CLASS: {
      return {
        ...state,
        listClass: [],
      };
    }
    case _typeActions.GET_ALL_CLASS_SUC: {
      const { data } = action.payload;
      return {
        ...state,
        listClass: data,
      };
    }
    case _typeActions.SET_CLASS_EDITING: {
      const { dataEditing } = action.payload;
      return {
        ...state,
        classEditing: new ClassModel(dataEditing),
      };
    }
    case _typeActions.SAVE_CLASS: {
      return {
        ...state,
        classEditing: new ClassModel(),
      };
    }
    case _typeActions.SAVE_CLASS_SUC: {
      const { data, isAdd } = action.payload;
      let { listClass } = state;
      if (isAdd) {
        listClass = [...listClass, data];
      } else {
        listClass = listClass.map((o) => {
          if (o.id === data.id) {
            o = { ...data };
          }
          return o;
        });
      }
      return {
        ...state,
        listClass,
      };
    }
    case _typeActions.DELETE_CLASS: {
      const classId = action.payload;
      return {
        ...state,
        listClass: state.listClass.filter((o) => o.id !== classId),
      };
    }
    default:
      return state;
  }
};
export default reducer;
