import { AuthForm } from "../../component/auth-form";
import { registerFormHook } from "./hook/register-form-hook";

export const RegisterLayout = () => {
  const { errors, handleSubmit, register, onSubmit } = registerFormHook();
  return (
    <div className="bg-green-600 flex items-center min-h-min w-[40%] justify-center rounded-md flex-col gap-y-5 p-1">
      <h1 className="text-3xl font-bold text-white">Register</h1>
      <AuthForm
        action={handleSubmit(onSubmit)}
        link={"/auth/login"}
        titleButton={"Register"}
        verifyText1={"Already have an account?"}
        verifyText2={"login here"}
      >
        <div className="flex flex-col">
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
        <div className="flex flex-col">
          <input
            {...register("name")}
            type="text"
            placeholder="Name"
            className="h-9 rounded-lg w-full bg-primary p-1"
          />
          {errors.name && (
            <p className="text-red-700 font-bold">*{errors.name.message}</p>
          )}
        </div>
        <div className="flex flex-col">
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="h-9 rounded-lg w-full bg-primary p-1"
          />
          {errors.password && (
            <p className="text-red-700 font-bold">*{errors.password.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="gender" className="text-black font-semibold text-lg">
            Gender
          </label>
          <div className="flex gap-x-4">
            <div className="flex items-center gap-x-2">
              <input
                {...register("gender")}
                type="radio"
                placeholder="Gender"
                value={"MALE"}
                className="size-4"
              />
              <label htmlFor="MALE" className="text-primary font-semibold">
                Male
              </label>
            </div>
            <div className="flex items-center gap-x-2">
              <input
                {...register("gender")}
                type="radio"
                placeholder="Gender"
                value={"FEMALE"}
                className="size-4"
              />
              <label htmlFor="FEMALE" className="text-primary font-semibold">
                Female
              </label>
            </div>
          </div>
          {errors.gender && (
            <p className="text-red-700 font-bold">*{errors.gender.message}</p>
          )}
        </div>
      </AuthForm>
    </div>
  );
};
