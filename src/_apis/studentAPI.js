import axiosService from "./axiosService";
import { API_ENDPOINT } from "../_constants";

const BASE_URL = `${API_ENDPOINT}/api/v1/student`;
const LIST_URL = {
  GET_LIST_STUDENT: `${BASE_URL}/getAllStudent`,
  SAVE_STUDENT: `${BASE_URL}/saveStudent`,
  DELETE_STUDENT: `${BASE_URL}/deleteStudent`,
};
/**
 * Hàm lấy tất cả dữ liệU
 * @returns 
 */
export const getListStudentAPI = () => {
  return axiosService.get(`${LIST_URL.GET_LIST_STUDENT}`);
};
/**
 * Hàm lưu dữ liệu data
 * @param {object} data 
 * @returns 
 */
export const saveStudentAPI = (data) => {
  return axiosService.post(`${LIST_URL.SAVE_STUDENT}`, data);
};
/**
 * Hàm xoá dữ liệU theo id
 * @param {number} id 
 * @returns 
 */
export const deleteStudentAPI = (data) => {
  return axiosService.delete(`${LIST_URL.DELETE_STUDENT}/${data.studentId}`);
};
