import { put, call, delay } from "redux-saga/effects";
import { showLoading, hideLoading } from "../_actions/ui";
import { STATUS_CODE } from "../_constants";
import { getAllYearAPI, saveYearAPI, deleteYearAPI } from "../_apis/yearAPI";
import {
  getAllYearSuccess,
  saveYearSuccess,
  deleteYearSuccess,
} from "../_actions/year";
import { hideModalYear } from "../_actions/modalForm";

export function* getAllYearSaga() {
  yield put(showLoading());
  const res = yield call(getAllYearAPI);
  const { data, status } = res;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(getAllYearSuccess(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

export function* saveYearSaga({ payload }) {
  yield put(showLoading());
  const res = yield call(saveYearAPI, payload);
  const { data, status } = res;
  if (status === STATUS_CODE.SUCCESS) {
    const isAdd = payload.id === 0;
    yield put(saveYearSuccess(data.data, isAdd));
    if (!isAdd) {
      yield put(hideModalYear());
    }
  }
  yield delay(1000);
  yield put(hideLoading());
}

export function* deleteYearSaga({ payload }) {
  yield put(showLoading());
  const res = yield call(deleteYearAPI, payload);
  if (res.status === STATUS_CODE.DELETE) {
    yield put(deleteYearSuccess(payload));
    yield put(hideModalYear());
  }
  yield delay(1000);
  yield put(hideLoading());
}
