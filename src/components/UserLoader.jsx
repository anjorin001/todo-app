import React, { useContext, useEffect } from "react";
import { Task } from "./TaskContext";
import api from "@/utils/api";

const UserLoader = () => {
  const { setUser, user } = useContext(Task);

const handleUserLoad = async () => {
  if (user === null) {
    const token = localStorage.getItem("token");
    
    if (!token) {
      console.warn("No token found");
      return;
    }

    try {
      const response = await api.get("/current-user");
      const fetchedUser = {
        username: response.data.username,
        email: response.data.email,
      };

      setUser(fetchedUser);
      localStorage.setItem("user", JSON.stringify(fetchedUser));
    } catch (err) {
      console.error("Failed to load user:", err);
      if (err.response?.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    }
  }
};

  useEffect(() => {
    handleUserLoad();
  }, []);

  return null;
};

export default UserLoader;
