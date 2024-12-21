import { Navigate, Outlet } from "react-router";
import { Navbar } from "../component/navbar";
import { useEffect } from "react";
import { useAppDispatch } from "../store";
import { addUser } from "../state/user";
import { getMe } from "../services/hooks/user-hooks";
import { User } from "../types/stores";

const RootLayout = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = getMe();
  useEffect(() => {
    const fetchUser = () => {
      if (!isLoading) {
        dispatch(addUser(data?.data ?? ({} as User)));
      }
    };
    fetchUser();
  }, [isLoading]);
  const isAuth = localStorage.getItem("token");
  if (!isAuth || !data) {
    return <Navigate to={"/auth/login"} />;
  }
  return (
    <div className="h-screen w-screen bg-primary flex flex-col justify-cente">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
