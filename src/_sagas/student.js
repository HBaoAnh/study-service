import { put, call, delay, takeLatest } from "redux-saga/effects";
import { showLoading, hideLoading } from "../_actions/ui";
import { STATUS_CODE } from "../_constants";
import { deleteStudentAPI } from "../_apis/studentAPI";
import { deleteStudentClassSuccess } from "../_actions/studentClass";
import { hideModal } from "../_actions/modalForm";
import * as _studentActions from "../_constants/student";

function* deleteStudentSaga({ payload }) {
  yield put(showLoading());
  const resp = yield call(deleteStudentAPI, payload);
  if (resp.status === STATUS_CODE.DELETE) {
    yield put(deleteStudentClassSuccess(payload));
    yield put(hideModal());
  }
  yield delay(1000);
  yield put(hideLoading());
}

export default function* studentSaga() {
  yield takeLatest(_studentActions.DELETE_STUDENT, deleteStudentSaga);
}
