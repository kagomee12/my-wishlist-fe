import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createMyWishlist } from "../../../services/hooks/wishlist-hook";
import {
  TWishlist,
  wishlistSchema,
} from "../../../services/validators/wishlist-schema";

export const wishlistHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TWishlist>({ resolver: zodResolver(wishlistSchema) });
  const { mutateAsync } = createMyWishlist();

  const onSubmit = async (data: TWishlist) => {
    mutateAsync(data);
  };

  const onError = (errors: any) => {
    console.log(errors);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    onError,
    errors,
  };
};
