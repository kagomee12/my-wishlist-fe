import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TLoginSchema,
  loginSchema,
} from "../../../services/validators/user-schema";
import { loginUser } from "../../../services/hooks/user-hooks";
import { setAuthToken } from "../../../services/api";
import { getMe } from "../../../services/call/user-call";
import { useAppDispatch } from "../../../store";
import { addUser } from "../../../state/user";

export const loginFormHook = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const { mutateAsync } = loginUser();
  const onSubmit = async (data: TLoginSchema) => {
    const tokenUser = await mutateAsync(data);
    setAuthToken(tokenUser.data);
    localStorage.setItem("token", tokenUser.data);
    const getUserSelf = await getMe();
    console.log(getUserSelf.data, "hj");

    dispatch(addUser(getUserSelf.data));
    reset();
  };
  const onError = (errors: any) => console.log(errors);

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    onError,
  };
};
