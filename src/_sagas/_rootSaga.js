import { all } from "redux-saga/effects";
import studentClassSaga from "./studentClass";
import studentSaga from "./student";
import scoreSaga from "./score";
import yearSaga from "./year";
import classSaga from "./class";
import SubjectSaga from "./subject";

function* _rootSaga() {
  yield all([
    classSaga(),
    yearSaga(),
    studentClassSaga(),
    studentSaga(),
    scoreSaga(),
    SubjectSaga(),
  ]);
}

export default _rootSaga;
