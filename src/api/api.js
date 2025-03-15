import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  headers: {
    "Content-Type": "application/json"
  }
});

export const fetchAllSections  = async () => await api.get("/sections");
export const fetchSectionById  = async (id) => await api.get(`/sections/${id}`);

export const fetchAllStudents  = async () => await api.get("/students");
export const fetchSectionStudents  = async (sectionId) => await api.get(`/sections/${sectionId}/students`);

export const removeSelectedStudent = async(sectionId, studentId) => 
  await api.delete(`/sections/${sectionId}/students/${studentId}`);

export const addSelectedStudent = async(sectionId, studentId) => 
  await api.put(`/sections/${sectionId}/students/${studentId}`);

export const removeAllSelectedStudents = async (sectionId, studentIds) => {
  const requests = studentIds.map(s => removeSelectedStudent(sectionId, s));
  await axios.all(requests);
}
