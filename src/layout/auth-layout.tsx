import { Navigate, Outlet } from "react-router";
import { getMe } from "../services/hooks/user-hooks";
import { useEffect } from "react";

const AuthLayout = () => {
  const { data, isLoading } = getMe();
  
  useEffect(() => {
    const load = async () => {
      if (isLoading) {
        return (
          <div className="text-center align-middle justify-center flex">
            Loading...
          </div>
        );
      }
    };
    load();
  }, [isLoading]);
  
  if (data) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="h-screen w-screen bg-primary flex flex-col justify-center items-center py-5">
        <h1>Welcome to My Wishlist Web</h1>
        <Outlet />
      </div>
    </>
  );
};

export default AuthLayout;
