import axiosService from "./axiosService";
import { API_ENDPOINT } from "../_constants";

const BASE_URL = `${API_ENDPOINT}/api/v1/Year`;
const LIST_URL = {
  GET_LIST_SCHOOL_YEAR: `${BASE_URL}/getAllSchoolYear`,
  SAVE_SCHOOL_YEAR: `${BASE_URL}/saveSchoolYear`,
  DELETE_SCHOOL_YEAR: `${BASE_URL}/deleteSchoolYear`,
};
/**
 * Hàm lấy tất cả dữ liệu
 * @returns
 */
export const getListSchoolAPI = () => {
  return axiosService.get(`${LIST_URL.GET_LIST_SCHOOL_YEAR}`);
};
/**
 * Hàm Lưu dữ liệu data
 * @param {object} data
 * @returns
 */
export const saveSchoolAPI = (data) => {
  return axiosService.post(`${LIST_URL.SAVE_SCHOOL_YEAR}`, data);
};
/**
 * Hàm Xoá dữ liệu theo id
 * @param {number} id
 * @returns
 */
export const deleteSchoolAPI = (id) => {
  return axiosService.delete(`${LIST_URL.DELETE_SCHOOL_YEAR}/${id}`);
};
