import { put, call, delay, takeEvery, takeLatest } from "redux-saga/effects";
import { showLoading, hideLoading } from "../_actions/ui";
import * as _scoreActions from "../_constants/score";
import { STATUS_CODE } from "../_constants";
import {
  getScoreByStudentIdAPI,
  saveScoreStudentAPI,
  addScoreBeginAPI,
} from "../_apis/scoreAPI";
import {
  getScoreByStudentIdSuccess,
  saveScoreStudentSuccess,
  addScoreBeginSuccess,
} from "../_actions/score";
import { hideModal } from "../_actions/modalForm";

function* getScoreByStudentIdSaga({ payload }) {
  yield put(showLoading());
  const res = yield call(getScoreByStudentIdAPI, payload.data);
  const { status, data } = res;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(getScoreByStudentIdSuccess(data.data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* saveScoreStudentSaga({ payload }) {
  yield put(showLoading());
  const res = yield call(saveScoreStudentAPI, payload);
  const { status, data } = res;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(saveScoreStudentSuccess(data.data));
    yield put(hideModal());
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* addScoreBeginSaga({ payload }) {
  yield put(showLoading());
  const res = yield call(addScoreBeginAPI, payload.data);
  const { status, data } = res;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(addScoreBeginSuccess(data.data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

export default function* scoreSaga() {
  yield takeLatest(
    _scoreActions.GET_SCORE_BY_STUDENT_ID,
    getScoreByStudentIdSaga
  );
  yield takeEvery(_scoreActions.SAVE_SCORE_STUDENT, saveScoreStudentSaga);
  yield takeLatest(_scoreActions.ADD_SCORE_BEGIN, addScoreBeginSaga);
}
