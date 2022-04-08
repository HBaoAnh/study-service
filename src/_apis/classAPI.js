import axiosService from "./axiosService";
import { API_ENDPOINT } from "../_constants/";

const BASE_URL = `${API_ENDPOINT}/api/v1/class`;
const LIST_URL = {
  GET_LIST_CLASS: `${BASE_URL}/getAllClass`,
  SAVE_CLASS: `${BASE_URL}/saveClass`,
  DELETE_CLASS: `${BASE_URL}/deleteClass`,
};
/**
 * Hàm lấy tất cả dữ liệU
 * @returns 
 */
export const getAllClassAPI = () => {
  return axiosService.get(`${LIST_URL.GET_LIST_CLASS}`);
};
/**
 * Hàm lưu dữ liệu data
 * @param {object} data 
 * @returns 
 */
export const saveClassAPI = (data) => {
  return axiosService.post(`${LIST_URL.SAVE_CLASS}`, data);
};
/**
 * Hàm xoá dữ liệU theo id
 * @param {number} id 
 * @returns 
 */
export const deleteClassAPI = (id) => {
  return axiosService.delete(`${LIST_URL.DELETE_CLASS}/${id}`);
};
