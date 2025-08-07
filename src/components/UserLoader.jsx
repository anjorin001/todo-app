import React, { useContext, useEffect } from "react";
import { Task } from "./TaskContext";
import api from "@/utils/api";

const UserLoader = () => {
  const { setUser, user } = useContext(Task);

  const handleUserLoad = async () => {
    if (user === null) {
      const storedUser = localStorage.getItem("user");

      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
        } catch (err) {
          console.error("Invalid user data in localStorage:", err);
          localStorage.removeItem("user");
        }
      } else {
        try {
          const response = await api.get("/current-user");
          console.log(response)
          const fetchedUser = {
            username: response.data.username,
            email: response.data.email,
          };

          console.log(fetchedUser)
          setUser(fetchedUser);
          localStorage.setItem("user", JSON.stringify(fetchedUser));
        } catch (err) {
          console.error("Failed to load user:", err);
          if (err.response?.status === 401) {
            console.warn("Unauthorized. Redirecting to login...");
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            // Optionally redirect to login page:
            // window.location.href = "/login";
          }
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
