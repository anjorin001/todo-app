import React, { useContext } from "react";
import { User, Mail, LogOut, Edit3, Settings } from "lucide-react";
import { Task } from "@/components/TaskContext";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const { user, setUser } = useContext(Task);
  const navigate = useNavigate()

  const handleLogout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user")
    setUser(null);
    navigate("/login")
  };

  return (
    <div className="auth-page">
      <div className="min-h-screen p-8 ml-64">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Profile</h1>
            <p className="text-gray-400">
              Manage your account settings and preferences
            </p>
          </div>

          {/* Profile Card */}
          <div
            className="rounded-xl shadow-xl p-8 mb-6"
            style={{ backgroundColor: "#242426" }}
          >
            <div className="flex items-center space-x-6 mb-8">
              {/* Profile Avatar */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <User size={40} className="text-white" />
              </div>

              {/* User Info */}
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-white mb-2">
                  {user?.user_metadata?.full_name || user?.username || "User"}
                </h2>
                <p className="text-gray-400 text-lg">{user?.email}</p>
              </div>

              {/* Edit Button */}
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#4285f4" }}
              >
                <Edit3 size={16} />
                Edit Profile
              </button>
            </div>

            {/* Profile Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg">
                <User size={20} className="text-blue-400" />
                <div>
                  <p className="text-sm text-gray-400">Username</p>
                  <p className="text-white font-medium">
                    {user?.user_metadata?.full_name ||
                      user?.username ||
                      "Not set"}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg">
                <Mail size={20} className="text-blue-400" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white font-medium">{user?.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div
            className="rounded-xl shadow-xl p-6"
            style={{ backgroundColor: "#242426" }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Account Actions
            </h3>
            <div className="flex flex-wrap gap-4">
              <button
                className="flex items-center gap-2 px-6 py-3 rounded-lg text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#4285f4" }}
              >
                <Edit3 size={18} />
                Edit Profile
              </button>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
