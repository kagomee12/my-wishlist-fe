import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editMyWishlist } from "../../../services/hooks/wishlist-hook";
import {
  TWishlistEdit,
  wishlistEditSchema,
} from "../../../services/validators/wishlist-schema";
import { useNavigate } from "react-router-dom";

export const editWishlistHook = (id: string) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TWishlistEdit>({ resolver: zodResolver(wishlistEditSchema) });
  const { mutateAsync } = editMyWishlist(id ?? "");
  const navigate = useNavigate();

  const onSubmit = async (data: TWishlistEdit) => {
    mutateAsync(data);
    navigate('/')
  };

  const onError = (errors: any) => {
    console.error(errors);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    onError,
    errors,
  };
};
