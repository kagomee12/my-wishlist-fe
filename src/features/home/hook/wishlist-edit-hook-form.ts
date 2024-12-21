import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TWishlistEdit,
  wishlistEditSchema,
} from "../../../services/validators/wishlist-schema";
import { editMyWishlist } from "../../../services/hooks/wishlist-hook";

export const wislistEditHookForm = (id: string) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TWishlistEdit>({ resolver: zodResolver(wishlistEditSchema) });
  const { mutateAsync } = editMyWishlist(id);
  const onSubmit = async (data: TWishlistEdit) => {
    mutateAsync(data);
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
