import api from "@/utils/api"

const signupRequest = async (signupData) => {
 let res = null;
  try {
    const response = await api.post("/auth/signup", signupData);
    res = response.data;
  } catch (err) {
    if (err.response) {
      res = err.response.data;
    } else {
      console.error("Request failed:", err.message);
    }
  }
  return res
}

export default signupRequest