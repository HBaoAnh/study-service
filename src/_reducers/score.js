import * as _typeActions from "../_constants/score";
import ScoreModel from "../model/score.model";
const initialState = {
  scores: [],
  scoreEditing: new ScoreModel(),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case _typeActions.GET_SCORE_BY_STUDENT_ID:
      return {
        ...state,
        scores: [],
      };

    case _typeActions.GET_SCORE_BY_STUDENT_ID_SUC: {
      const { data } = action.payload;
      return {
        ...state,
        scores: data,
      };
    }
    case _typeActions.SET_SCORE_EDITING: {
      const { dataEditing } = action.payload;
      return {
        ...state,
        scoreEditing: new ScoreModel(dataEditing),
      };
    }
    case _typeActions.SAVE_SCORE_STUDENT:
      return {
        ...state,
        scoreEditing: new ScoreModel(),
      };

    case _typeActions.SAVE_SCORE_STUDENT_SUC: {
      const { data } = action.payload;
      const { scores } = state;
      return {
        ...state,
        scores: scores.map((o) => {
          if (o.id === data.id) {
            o = { ...data };
          }
          return o;
        }),
      };
    }

    case _typeActions.ADD_SCORE_BEGIN: {
      return {
        ...state,
        scores: [],
      };
    }

    case _typeActions.ADD_SCORE_BEGIN_SUC: {
      const { data } = action.payload;
      return {
        ...state,
        scores: data,
      };
    }
    default:
      return state;
  }
};
export default reducer;
