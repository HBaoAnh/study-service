import * as Types from "../_constants/class";
import { put, call, delay, takeLatest, takeEvery } from "redux-saga/effects";
import { showLoading, hideLoading } from "../_actions/ui";
import { STATUS_CODE } from "../_constants";
import {
  getAllClassAPI,
  saveClassAPI,
  deleteClassAPI,
} from "../_apis/classAPI";
import {
  getAllClassSuccess,
  saveClassSuccess,
  deleteClassSuccess,
} from "../_actions/class";
import { hideModal } from "../_actions/modalForm";

function* getAllClassSaga() {
  yield put(showLoading());
  const res = yield call(getAllClassAPI);
  const { data, status } = res;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(getAllClassSuccess(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* saveClassSaga({ payload }) {
  yield put(showLoading());
  const res = yield call(saveClassAPI, payload);
  const { data, status } = res;
  if (status === STATUS_CODE.SUCCESS) {
    const isAdd = payload.id === 0;
    yield put(saveClassSuccess(data.data, isAdd));
    if (!isAdd) {
      yield put(hideModal());
    }
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* deleteClassSaga({ payload }) {
  yield put(showLoading());
  const res = yield call(deleteClassAPI, payload);
  if (res.status === STATUS_CODE.DELETE) {
    yield put(deleteClassSuccess(payload));
    yield put(hideModal());
  }
  yield delay(1000);
  yield put(hideLoading());
}

export default function* classSaga() {
  yield takeLatest(Types.GET_ALL_CLASS, getAllClassSaga);
  yield takeEvery(Types.SAVE_CLASS, saveClassSaga);
  yield takeLatest(Types.DELETE_CLASS, deleteClassSaga);
}
