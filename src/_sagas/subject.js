import * as Types from "../_constants/subject";
import { put, call, delay, takeLatest, takeEvery } from "redux-saga/effects";
import { showLoading, hideLoading } from "../_actions/ui";
import { STATUS_CODE } from "../_constants";
import {
  getAllSubjectAPI,
  saveSubjectAPI,
  deleteSubjectAPI,
} from "../_apis/subjectAPI";
import {
  getAllSubjectSuccess,
  saveSubjectSuccess,
  deleteSubjectSuccess,
} from "../_actions/subject";
import { hideModal } from "../_actions/modalForm";

function* getAllSubjectSaga() {
  yield put(showLoading());
  const res = yield call(getAllSubjectAPI);
  const { data, status } = res;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(getAllSubjectSuccess(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* saveSubjectSaga({ payload }) {
  yield put(showLoading());
  const res = yield call(saveSubjectAPI, payload);
  const { data, status } = res;
  if (status === STATUS_CODE.SUCCESS) {
    const isAdd = payload.id === 0;
    yield put(saveSubjectSuccess(data.data, isAdd));
    if (!isAdd) {
      yield put(hideModal());
    }
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* deleteSubjectSaga({ payload }) {
  yield put(showLoading());
  const res = yield call(deleteSubjectAPI, payload);
  if (res.status === STATUS_CODE.DELETE) {
    yield put(deleteSubjectSuccess(payload));
    yield put(hideModal());
  }
  yield delay(1000);
  yield put(hideLoading());
}

export default function* SubjectSaga() {
  yield takeLatest(Types.GET_ALL_SUBJECT, getAllSubjectSaga);
  yield takeEvery(Types.SAVE_SUBJECT, saveSubjectSaga);
  yield takeLatest(Types.DELETE_SUBJECT, deleteSubjectSaga);
}
