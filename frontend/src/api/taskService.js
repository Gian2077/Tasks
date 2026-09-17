import api from "./axios";
export const getTasks = async () => {
  try {
    return await api.get("/tasks");
  } catch (error) {
    console.error(error);
  }
};
