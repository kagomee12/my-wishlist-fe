import { useEffect } from "react";
import { FormCreateWishlist } from "../../component/form-create-wishlist";
import { getMyWishlistbyOWnerId } from "../../services/hooks/wishlist-hook";
import { WishlistCard } from "../../component/wishlist-card";
import { wishlistHookForm } from "./hook/wishlist-hook-form";

type HomeLayoutProps = {
  id: string;
};

export const HomeLayout: React.FC<HomeLayoutProps> = ({ id }) => {
  const { data, isLoading } = getMyWishlistbyOWnerId(id);
  
  useEffect(() => {
    const load = async () => {
      if (isLoading) {
        return (
          <div className="text-center align-middle justify-center flex">
            Loading...
          </div>
        );
      }
    };
    load();
  }, [isLoading]);


  const { errors, handleSubmit, onError, onSubmit, register } =
    wishlistHookForm();
  return (
    <>
      <div className="w-full flex flex-col h-full items-center">
        <FormCreateWishlist
          buttonText="kirim"
          handleCreateWishlist={handleSubmit(onSubmit, onError)}
        >
          <div className="w-[90%]">
            <input
              type="text"
              placeholder="your wishlist "
              className="w-[100%] h-8 p-2 rounded-md"
              {...register("items")}
            />
            {errors.items?.message && (
              <div className="text-red-600">*{errors.items.message}</div>
            )}
          </div>
        </FormCreateWishlist>
        <div className="w-full border-t my-4 border-gray-300"></div>
        <div className="w-full flex flex-col items-center h-min gap-y-3">
          {data?.data.length != 0 ? (
            data?.data.map((item, index) => (
              <WishlistCard
                key={index}
                id={item.id}
                isFulfield={item.isFulfield}
                createdAt={item.createdAt}
                items={item.items}
                ownerId={item.ownerId}
              />
            ))
          ) : (
            <div className="flex justify-center items-center w-full h-full ">
              <h1 className="text-gray-500 font-serif">
                Make your dreams real with hard work.
              </h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
