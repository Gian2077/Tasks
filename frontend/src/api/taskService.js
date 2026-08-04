import api from "./axios";
export const getTasks = async () => {
  try {
    return await api.get("/tasks");
  } catch (error) {
    console.error(error);
  }
};
export const getTaskById = async (id) => {
  try {
    return await api.get(`/tasks/${id}`);
  } catch (error) {
    console.error(error);
  }
};
export const createTask = async (task) => {
  try {
    return await api.post("/tasks", task);
  } catch (error) {
    console.error(error);
  }
};
export const updateTask = async (id, task) => {
  try {
    return await api.put(`/tasks/${id}`, task);
  } catch (error) {
    console.error(error);
  }
};
export const deleteTask = async (id) => {
  try {
    return await api.delete(`/tasks/${id}`);
  } catch (error) {
    console.error(error);
  }
};
