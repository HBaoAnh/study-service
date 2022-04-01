import { takeLatest, takeEvery } from "redux-saga/effects";
import {
  getStudentByYearClass,
  saveStudentClassSaga,
  deleteStudentClassSaga,
} from "./studentClass";
import * as _studentClassActions from "../_constants/studentclass";

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
}

export default _rootSaga;
