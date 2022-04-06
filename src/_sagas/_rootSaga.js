import { takeLatest, takeEvery } from "redux-saga/effects";
import {
  getStudentByYearClass,
  saveStudentClassSaga,
  deleteStudentClassSaga,
  transferStudentClassSaga,
} from "./studentClass";
import { getScoreByStudentIdSaga, saveScoreStudentSaga } from "./score";
import * as _studentClassActions from "../_constants/studentclass";
import * as _scoreActions from "../_constants/score";

function* _rootSaga() {
  //Hoc sinh lop hoc
  yield takeLatest(
    _studentClassActions.GET_STUDENT_CLASS,
    getStudentByYearClass
  );
  yield takeEvery(
    _studentClassActions.SAVE_STUDENT_CLASS,
    saveStudentClassSaga
  );
  yield takeLatest(
    _studentClassActions.DELETE_STUDENT_CLASS,
    deleteStudentClassSaga
  );
  yield takeEvery(
    _studentClassActions.TRANSFER_STUDENT_CLASS,
    transferStudentClassSaga
  );
  // bang diem theo hoc sinh
  yield takeLatest(
    _scoreActions.GET_SCORE_BY_STUDENT_ID,
    getScoreByStudentIdSaga
  );
  yield takeEvery(_scoreActions.SAVE_SCORE_STUDENT, saveScoreStudentSaga);
}

export default _rootSaga;
