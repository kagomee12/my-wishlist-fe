import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  editUserProfileSchema,
  TEditUserProfile,
} from "../../../services/validators/user-schema";
import { updateprofileUser } from "../../../services/hooks/user-hooks";
import { useNavigate } from "react-router";

export const editProfileHook = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<TEditUserProfile>({
    resolver: zodResolver(editUserProfileSchema),
  });

  const { mutateAsync } = updateprofileUser();

  const onSubmit = async (data: TEditUserProfile) => {
    mutateAsync(data);
    navigate("/profile");
  };

  const onError = (errors: any) => {
    console.error(errors);
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    onError,
    control,
  };
};
