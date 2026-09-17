import api from "./axios";
export const getSteps = async () => {
  try {
    return await api.get("/steps");
  } catch (error) {
    console.error(error);
  }
};
