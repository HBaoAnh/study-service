import axiosService from "./axiosService";
import { API_ENDPOINT } from "../_constants";

const BASE_URL = `${API_ENDPOINT}/api/v1/Year`;
const LIST_URL = {
  GET_LIST_YEAR: `${BASE_URL}/getAllYear`,
  SAVE_YEAR: `${BASE_URL}/saveYear`,
  DELETE_YEAR: `${BASE_URL}/deleteYear`,
};
/**
 * Hàm lấy tất cả dữ liệu
 * @returns
 */
export const getListYearAPI = () => {
  return axiosService.get(`${LIST_URL.GET_LIST_YEAR}`);
};
/**
 * Hàm Lưu dữ liệu data
 * @param {object} data
 * @returns
 */
export const saveYearAPI = (data) => {
  return axiosService.post(`${LIST_URL.SAVE_YEAR}`, data);
};
/**
 * Hàm Xoá dữ liệu theo id
 * @param {number} id
 * @returns
 */
export const deleteYearAPI = (id) => {
  return axiosService.delete(`${LIST_URL.DELETE_YEAR}/${id}`);
};
