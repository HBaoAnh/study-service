import { put, call, delay, takeLatest, takeEvery } from "redux-saga/effects";
import { showLoading, hideLoading } from "../_actions/ui";
import * as _yearActions from "../_constants/year";
import { STATUS_CODE } from "../_constants";
import { getAllYearAPI, saveYearAPI, deleteYearAPI } from "../_apis/yearAPI";
import {
  getAllYearSuccess,
  saveYearSuccess,
  deleteYearSuccess,
} from "../_actions/year";
import { hideModal } from "../_actions/modalForm";

function* getAllYearSaga() {
  yield put(showLoading());
  const res = yield call(getAllYearAPI);
  const { data, status } = res;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(getAllYearSuccess(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* saveYearSaga({ payload }) {
  yield put(showLoading());
  const res = yield call(saveYearAPI, payload);
  const { data, status } = res;
  if (status === STATUS_CODE.SUCCESS) {
    const isAdd = payload.id === 0;
    yield put(saveYearSuccess(data.data, isAdd));
    if (!isAdd) {
      yield put(hideModal());
    }
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* deleteYearSaga({ payload }) {
  yield put(showLoading());
  const res = yield call(deleteYearAPI, payload);
  if (res.status === STATUS_CODE.DELETE) {
    yield put(deleteYearSuccess(payload));
    yield put(hideModal());
  }
  yield delay(1000);
  yield put(hideLoading());
}

export default function* yearSaga() {
  yield takeLatest(_yearActions.GET_ALL_YEAR, getAllYearSaga);
  yield takeEvery(_yearActions.SAVE_YEAR, saveYearSaga);
  yield takeLatest(_yearActions.DELETE_YEAR, deleteYearSaga);
}
