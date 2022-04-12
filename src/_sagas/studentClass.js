import { put, call, delay,takeLatest,takeEvery } from "redux-saga/effects";
import { showLoading, hideLoading } from "../_actions/ui";
import { STATUS_CODE } from "../_constants";
import * as _studentClassActions from "../_constants/studentclass";
import {
  transferStudentClassAPI,
  getStudentClassAPI,
  saveStudentClassAPI,
} from "../_apis/studenClassAPI";
import {
  getStudentClassSuc,
  transferStudentClassSuccess,
  saveStudentClassSuccess,
} from "../_actions/studentClass";
import { hideModal } from "../_actions/modalForm";

 function* getStudentByYearClass({ payload }) {
  yield put(showLoading());
  const resp = yield call(getStudentClassAPI, payload);
  const { data, status } = resp;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(getStudentClassSuc(data.data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

 function* saveStudentClassSaga({ payload }) {
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

 function* transferStudentClassSaga({ payload }) {
  yield put(showLoading());
  const resp = yield call(transferStudentClassAPI, payload);
  const { status, data } = resp;
  if (status) {
    yield put(transferStudentClassSuccess(data.data));
    yield put(hideModal());
  }
  yield delay(1000);
  yield put(hideLoading());
}

export default function * studentClassSaga() {
  yield takeLatest(
    _studentClassActions.GET_STUDENT_CLASS,
    getStudentByYearClass
  );
  yield takeEvery(
    _studentClassActions.SAVE_STUDENT_CLASS,
    saveStudentClassSaga
  );
  yield takeEvery(
    _studentClassActions.TRANSFER_STUDENT_CLASS,
    transferStudentClassSaga
  );
}