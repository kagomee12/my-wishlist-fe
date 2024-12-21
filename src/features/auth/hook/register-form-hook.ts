import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  userSchema,
  TUserSchema,
} from "../../../services/validators/user-schema";
import { registerUser } from "../../../services/hooks/user-hooks";
import { useNavigate } from "react-router-dom";

export const registerFormHook = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUserSchema>({ resolver: zodResolver(userSchema) });

  const { mutateAsync } = registerUser();

  const onSubmit = async (data: TUserSchema) => {
    try {
      await mutateAsync(data);
      navigate("/auth/login");
    } catch (error) {
      console.log(error);
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
  };
};
