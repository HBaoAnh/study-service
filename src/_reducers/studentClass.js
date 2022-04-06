import * as _typeActions from "../_constants/studentclass";
import StudentClassModel from "../model/student.model";
const initialState = {
  listStudentclass: [],
  studentEditing: new StudentClassModel(),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case _typeActions.GET_STUDENT_CLASS: {
      return {
        ...state,
        listStudentclass: [],
      };
    }

    case _typeActions.GET_STUDENT_CLASS_SUC:
      const { data } = action.payload;
      return {
        ...state,
        listStudentclass: data,
      };

    case _typeActions.SET_STUDENT_CLASS_EDITING: {
      const { dataEditing } = action.payload;
      return {
        ...state,
        studentEditing: new StudentClassModel(dataEditing),
      };
    }

    case _typeActions.SAVE_STUDENT_CLASS:
      return {
        ...state,
        studentEditing: new StudentClassModel(),
      };

    case _typeActions.SAVE_STUDENT_CLASS_SUC: {
      const { data, isAdd } = action.payload;
      let { listStudentclass } = state;
      if (isAdd) {
        listStudentclass = [...listStudentclass, data];
      } else {
        listStudentclass = listStudentclass.map((o) => {
          if (o.id === data.id) {
            o = { ...data };
          }
          return o;
        });
      }
      return {
        ...state,
        listStudentclass,
      };
    }

    case _typeActions.DELETE_STUDENT_CLASS: {
      return {
        ...state,
      };
    }
    case _typeActions.DELETE_STUDENT_CLASS_SUC: {
      return {
        ...state,
        listStudentclass: state.listStudentclass.filter(
          (o) => o.id !== action.payload.id
        ),
        studentEditing: new StudentClassModel(),
      };
    }
    case _typeActions.TRANSFER_STUDENT_CLASS: {
      return {
        ...state,
        studentEditing: new StudentClassModel(),
      };
    }
    case _typeActions.TRANSFER_STUDENT_CLASS_SUC: {
      const { data } = action.payload;
      const { listStudentclass } = state;
      return {
        ...state,
        listStudentclass: listStudentclass.map((o) => {
          if (o.id === data.id) {
            o = { ...data };
          }
          return o;
        }),
      };
    }
    default:
      return state;
  }
};
export default reducer;
