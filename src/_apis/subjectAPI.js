import axiosService from "./axiosService";
import { API_ENDPOINT } from "../_constants/";

const BASE_URL = `${API_ENDPOINT}/api/v1/subject`;
const LIST_URL = {
  GET_ALL_SUBJECT: `${BASE_URL}/getAllSubject`,
  SAVE_SUBJECT: `${BASE_URL}/saveSubject`,
  DELETE_SUBJECT: `${BASE_URL}/deleteSubject`,
};

export const getAllSubjectAPI = () => {
  return axiosService.get(`${LIST_URL.GET_ALL_SUBJECT}`);
};
export const saveSubjectAPI = (data) => {
  return axiosService.post(`${LIST_URL.SAVE_SUBJECT}`, data);
}
export const deleteSubjectAPI = (id) => {
  return axiosService.delete(`${LIST_URL.DELETE_SUBJECT}/${id}`);
};