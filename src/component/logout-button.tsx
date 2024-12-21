import { setAuthToken } from "../services/api";
import { useNavigate } from "react-router-dom";

export const LogoutButton = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setAuthToken();
    navigate("/");
  };

  return (
    <button
      onClick={logout}
      className="bg-primary text-white px-4 hover:opacity-50 active:opacity-100"
    >
      Logout
    </button>
  );
};
