import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/Teacher";

export const ListTeacher = () => axios.get(REST_API_BASE_URL);

export const createTeacher = (Teacher) =>
  axios.post(REST_API_BASE_URL, Teacher);

export const getTeacher = (TeacherId) =>
  axios.get(REST_API_BASE_URL + "/" + TeacherId);

export const updateTeacher = (TeacherId, Teacher) =>
  axios.put(REST_API_BASE_URL + "/" + TeacherId, Teacher);

export const deleteTeacher = (TeacherID) =>
  axios.delete(REST_API_BASE_URL + "/" + TeacherID);
