import axiosService from "./axiosService";
import { API_ENDPOINT } from "../_constants/";

const BASE_URL = `${API_ENDPOINT}/api/v1/subject`;
const LIST_URL = {
  GET_ALL_SUBJECT: `${BASE_URL}/getAllSubject`,
};

export const getAllSubject = () => {
  return axiosService.get(`${LIST_URL.GET_ALL_SUBJECT}`);
};
