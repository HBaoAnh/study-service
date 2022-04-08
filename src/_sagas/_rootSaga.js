import { takeLatest, takeEvery } from "redux-saga/effects";
import {
  getStudentByYearClass,
  saveStudentClassSaga,
  transferStudentClassSaga,
} from "./studentClass";
import { deleteStudentSaga } from "./student";
import {
  getScoreByStudentIdSaga,
  saveScoreStudentSaga,
  addScoreBeginSaga,
} from "./score";
import { getAllYearSaga, saveYearSaga, deleteYearSaga } from "./year";
import * as _studentClassActions from "../_constants/studentclass";
import * as _studentActions from "../_constants/student";
import * as _scoreActions from "../_constants/score";
import * as _yearActions from "../_constants/year";

function* _rootSaga() {
  //Nam hoc
  yield takeLatest(_yearActions.GET_ALL_YEAR, getAllYearSaga);
  yield takeEvery(_yearActions.SAVE_YEAR, saveYearSaga);
  yield takeLatest(_yearActions.DELETE_YEAR, deleteYearSaga);
  //Hoc sinh lop hoc
  yield takeLatest(
    _studentClassActions.GET_STUDENT_CLASS,
    getStudentByYearClass
  );
  yield takeEvery(
    _studentClassActions.SAVE_STUDENT_CLASS,
    saveStudentClassSaga
  );
  yield takeLatest(_studentActions.DELETE_STUDENT, deleteStudentSaga);
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
  yield takeLatest(_scoreActions.ADD_SCORE_BEGIN, addScoreBeginSaga);
}

export default _rootSaga;
