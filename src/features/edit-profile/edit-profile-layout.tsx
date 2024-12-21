import { AuthForm } from "../../component/auth-form";
import { editProfileHook } from "./hook/edit-profile-hook";
import { Controller } from "react-hook-form";
import { useAppSelector } from "../../store";

export const EditProfileLayout = () => {
  const { ...data } = useAppSelector((state) => state.auth.user);
  const { errors, handleSubmit, onError, onSubmit, register, control } =
    editProfileHook();
  return (
    <div className="bg-green-600 flex items-center min-h-min w-[40%] justify-center rounded-md flex-col gap-y-4 p-1">
      <h1 className="text-2xl text-white font-bold">Edit Profile</h1>
      <AuthForm action={handleSubmit(onSubmit, onError)} titleButton="Edit">
        <div className="flex flex-col">
          <Controller
            control={control}
            name="email"
            rules={{ required: true }}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  type="text"
                  placeholder="email"
                  className="h-9 rounded-lg w-full bg-primary p-1"
                  defaultValue={data.email}
                />
                {errors.email && (
                  <div className="text-red-500">{errors.email.message}</div>
                )}
              </>
            )}
          />
        </div>
        <div className="flex flex-col">
          <Controller
            control={control}
            name="name"
            rules={{ required: true }}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  type="text"
                  placeholder="name"
                  className="h-9 rounded-lg w-full bg-primary p-1"
                  defaultValue={data.name}
                />
                {errors.name && (
                  <div className="text-red-500">{errors.name.message}</div>
                )}
              </>
            )}
          />
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
