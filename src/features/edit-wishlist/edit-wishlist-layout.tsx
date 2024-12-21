import React, { useEffect } from "react";
import { WishlistCard } from "../../component/wishlist-card";
import { getMyWishlistById } from "../../services/hooks/wishlist-hook";
import { FormCreateWishlist } from "../../component/form-create-wishlist";
import { editWishlistHook } from "./hook/edit-wishlist-hook";

type EditWishlistLayoutProps = {
  id: string;
};

export const EditWishlistLayout: React.FC<EditWishlistLayoutProps> = ({
  id,
}) => {
  const { data, isLoading } = getMyWishlistById(id);
  const { errors, handleSubmit, onError, onSubmit, register } =
    editWishlistHook(id);
  useEffect(() => {
    const load = async () => {
      if (isLoading) {
        return (
          <div className="text-center align-middle justify-center flex ">
            Loading...
          </div>
        );
      }
    };
    load();
  }, [isLoading]);
  return (
    <div className="w-[100%] flex gap-2 flex-col justify-center items-center">
      <div className="w-full flex justify-center">
        <WishlistCard
          id={data?.data.id ?? ""}
          isFulfield={data?.data.isFulfield ?? false}
          createdAt={data?.data.createdAt ?? ""}
          ownerId={data?.data.ownerId ?? -1}
          items={data?.data.items ?? ""}
        />
      </div>
      <div className="w-full flex justify-center">
        <FormCreateWishlist
          buttonText="edit"
          handleCreateWishlist={handleSubmit(onSubmit, onError)}
        >
          <div className="w-[90%]">
            <input
              type="text"
              placeholder="edit your wishlist "
              className="w-[100%] h-8 p-2 rounded-md"
              {...register("items")}
            />
            {errors.items?.message && (
              <div className="text-red-600">*{errors.items.message}</div>
            )}
          </div>
        </FormCreateWishlist>
      </div>
    </div>
  );
};
