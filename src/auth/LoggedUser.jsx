import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "lucide-react";
import { Task } from "@/components/TaskContext";
import ProfilePage from "@/pages/Profile";
import UserLoader from "@/components/UserLoader";

const LoggedUser = () => {
  const { user, setShowProfile } = useContext(Task);
  const navigate = useNavigate();

  useEffect(() => {
    <UserLoader />;
  }, []);

  // If no user, show login button
  if (!user) {
    return (
      <div className="m-4">
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-2 mt-1.5 px-1.5 py-1 rounded text-white hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#39393d" }}
        >
          Profile <User size={16} />
        </button>
      </div>
    );
  }

  // If user exists, show profile page button
  return (
    <div className="m-4">
      <button
        onClick={() => {
          setShowProfile(true);
          navigate("/profile");
        }}
        className="flex items-center gap-2 mt-1.5 px-1.5 py-1 rounded text-white hover:opacity-90 transition-opacity"
        style={{ backgroundColor: "#39393d" }}
      >
        Profile <User size={16} />
      </button>
    </div>
  );
};

export default LoggedUser;

// style={{ backgroundColor: '#39393d' }}
// TODO  so this is what to do --- create another page that wpu render user asic information username email -- chngae pawwwrdo also .
