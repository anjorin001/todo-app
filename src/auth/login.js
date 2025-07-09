import api from "@/utils/api";

const loginRequest = async (loginData) => {
  let res = null;
  try {
    const response = await api.post("/auth/login", loginData);
    res = response.data;
  } catch (err) {
    if (err.response) {
      res = err.response.data;
    } else {
      console.error("Request failed:", err.message);
    }
  }
  return res
};

export default loginRequest;
