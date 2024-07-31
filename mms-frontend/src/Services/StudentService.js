import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/Student";

export const listStudent = () => axios.get(REST_API_BASE_URL);

export const createStudent = (Student) =>
  axios.post(REST_API_BASE_URL, Student);

export const getStudent = (StudentId) =>
  axios.get(REST_API_BASE_URL + "/" + StudentId);

export const updateStudent = (StudentId, Student) =>
  axios.put(REST_API_BASE_URL + "/" + StudentId, Student);

export const deleteStudent = (StudentId) =>
  axios.delete(REST_API_BASE_URL + "/" + StudentId);
