import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const fetchData = async () => {
  try {
    const response = await api.get("/api/data");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchClassData = async () => {
  try {
    const response = await api.get("/api/class");
    return response.data;
  } catch (error) {
    throw error;
  }
};


export default api;
