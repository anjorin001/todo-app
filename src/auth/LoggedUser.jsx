import React, { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import { useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";
const LoggedUser = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Logout error:", error.message);
    } else {
      window.location.href = "/my-day";
    }
  };

  useEffect(() => {
    console.log(user);
  });
  return (
    <div className="account">
      {user ? (
        <div className="account-info">
          <div className="account-img">
            <img
              src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbQ5zPfVq1W2O-oF2aEeooqECCaNAuwHATng&s'}
              alt="Profile"
              style={{ width: 50, height: 50, borderRadius: "50%" }}
            />
          </div>
          <div className="account-name">
            <p>{user?.user_metadata?.full_name}</p> <p className="truncate max-w-[180px] overflow-hidden whitespace-nowrap text-ellipsis">{user.email}</p>
          </div>
        </div>
      ) : (
        <button onClick={() => navigate("/signup")}>
          SignUp <LogIn />{" "}
        </button>
      )}
      {user && <button onClick={handleLogout}>logout</button>}
    </div>
  );
};

export default LoggedUser;
