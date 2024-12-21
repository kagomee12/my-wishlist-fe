import { AuthForm } from "../../component/auth-form";
import { loginFormHook } from "./hook/login-form-hook";

export const LoginLayout = () => {
  const { errors, handleSubmit, register, onSubmit, onError } = loginFormHook();
  return (
    <div className="bg-green-600 flex items-center min-h-min w-[40%] justify-center rounded-md flex-col gap-y-4 p-1">
      <h1 className="text-3xl font-bold text-white">Login</h1>
      <AuthForm
        action={handleSubmit(onSubmit, onError)}
        link={"/auth/register"}
        titleButton={"Login"}
        verifyText1={"Don't have an account?"}
        verifyText2={"register here"}
      >
        <div>
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="h-9 rounded-lg w-full bg-primary p-1"
          />
          {errors.email && (
            <p className="text-red-700 font-bold">*{errors.email.message}</p>
          )}
        </div>
        <div>
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="h-9 rounded-lg bg-primary w-full p-1"
          />
          {errors.password && (
            <p className="text-red-700 font-bold">*{errors.password.message}</p>
          )}
        </div>
      </AuthForm>
    </div>
  );
};
