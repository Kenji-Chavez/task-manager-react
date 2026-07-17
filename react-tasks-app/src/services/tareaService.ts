import axios from "axios";
import type { Tarea } from "../model/Tarea";

const API_URL = "http://localhost:3001/tasks";

export const getTareas = async () => {
  const response = await axios.get<Tarea[]>(API_URL);
  return response.data;
};
export const getTareaById = async (id: number) => {
  const response = await axios.get<Tarea>(`${API_URL}/${id}`);
  return response.data;
};
export const createTarea = async (tarea: Tarea) => {
  const response = await axios.post<Tarea>(API_URL, tarea);
  return response.data;
};
export const updateTarea = async (id: number, tarea: Tarea) => {
  const response = await axios.put<Tarea>(`${API_URL}/${id}`, tarea);
  return response.data;
};
export const deleteTareaById = async (id: number) => {
  await axios.delete<void>(`${API_URL}/${id}`);
};
