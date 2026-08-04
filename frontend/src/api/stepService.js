import api from "./axios";
export const getSteps = async () => {
  try {
    return await api.get("/steps");
  } catch (error) {
    console.log(error);
  }
};
export const getStepById = async (id) => {
  try {
    return await api.get(`steps/${id}`);
  } catch (error) {
    console.log(error);
  }
};
