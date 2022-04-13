import * as _typeActions from "../_constants/subject";
import SubjectModel from "../model/subject.model";

const initialState = {
  listSubject: [],
  subjectEditing: new SubjectModel(),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case _typeActions.GET_ALL_SUBJECT: {
      return {
        ...state,
        listSubject: [],
      };
    }
    case _typeActions.GET_ALL_SUBJECT_SUC: {
      const { data } = action.payload;
      return {
        ...state,
        listSubject: data,
      };
    }
    case _typeActions.SET_SUBJECT_EDITING: {
      const { dataEditing } = action.payload;
      return {
        ...state,
        subjectEditing: new SubjectModel(dataEditing),
      };
    }
    case _typeActions.SAVE_SUBJECT: {
      return {
        ...state,
        subjectEditing: new SubjectModel(),
      };
    }
    case _typeActions.SAVE_SUBJECT_SUC: {
      const { data, isAdd } = action.payload;
      let { listSubject } = state;
      if (isAdd) {
        listSubject = [...listSubject, data];
      } else {
        listSubject = listSubject.map((o) => {
          if (o.id === data.id) {
            o = { ...data };
          }
          return o;
        });
      }
      return {
        ...state,
        listSubject,
      };
    }
    case _typeActions.DELETE_SUBJECT: {
      const subjectId = action.payload;
      return {
        ...state,
        listSubject: state.listSubject.filter((o) => o.id !== subjectId),
      };
    }
    default:
      return state;
  }
};
export default reducer;
