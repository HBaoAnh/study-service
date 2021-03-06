import axiosService from "./axiosService";
import { API_ENDPOINT } from "../_constants/";

const BASE_URL = `${API_ENDPOINT}/api/v1/score`;
const LIST_URL = {
  GET_SCORE_BY_STUDENT_ID: `${BASE_URL}/getScoreByStudentId`,
  SAVE_SCORE_STUDENT: `${BASE_URL}/saveScoreStudent`,
  ADD_SCORE_BEGIN: `${BASE_URL}/addScoreBegin`,
};

export const getScoreByStudentIdAPI = (data) => {
  return axiosService.get(
    `${LIST_URL.GET_SCORE_BY_STUDENT_ID}/${data.yearId}/${data.classId}/${data.studentId}`
  );
};

export const saveScoreStudentAPI = (data) => {
  return axiosService.post(`${LIST_URL.SAVE_SCORE_STUDENT}`, data);
};

export const addScoreBeginAPI = (data) => {
  return axiosService.get(`${LIST_URL.ADD_SCORE_BEGIN}/${data.yearId}/${data.classId}/${data.studentId}`)
}