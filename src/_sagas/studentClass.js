import { put, call, delay } from "redux-saga/effects";
import { showLoading, hideLoading } from "../_actions/ui";
import { STATUS_CODE } from "../_constants";
import {
  getStudentClassAPI,
  saveStudentClassAPI,
  deleteStudentClassAPI,
} from "../_apis/studenClassAPI";
import {
  getStudentClassSuc,
  saveStudentClassSuccess,
  deleteStudentClassSuccess,
} from "../_actions/studentClass";
import { hideModal } from "../_actions/modalForm";

export function* getStudentByYearClass({ payload }) {
  yield put(showLoading());
  const resp = yield call(getStudentClassAPI, payload);
  const { data, status } = resp;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(getStudentClassSuc(data.data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

export function* saveStudentClassSaga({ payload }) {
  yield put(showLoading());
  const resp = yield call(saveStudentClassAPI, payload);
  const { data, status } = resp;
  if (status === STATUS_CODE.SUCCESS) {
    const isAdd = payload.id === 0;
    yield put(saveStudentClassSuccess(data.data, isAdd));
    if (!isAdd) {
      yield put(hideModal());
    }
  }
  yield delay(1000);
  yield put(hideLoading());
}

export function* deleteStudentClassSaga({ payload }) {
  yield put(showLoading());
  const resp = yield call(deleteStudentClassAPI, payload);
  const { status } = resp;
  if (status === STATUS_CODE.DELETE) {
    yield put(deleteStudentClassSuccess(payload.id));
  }
  yield delay(1000);
  yield put(hideLoading());
}
