import {
  deleteMyWishlist,
  updatedStatusMyWishList,
} from "../services/hooks/wishlist-hook";
import { MyWishlist } from "../types/stores";
import { useNavigate } from "react-router-dom";

export const WishlistCard = (data: MyWishlist) => {
  const { mutateAsync: deletedWishList } = deleteMyWishlist();
  const navigate = useNavigate();
  const { mutateAsync: updatedStatusMyWishlist } = updatedStatusMyWishList(
    data.id
  );
  return (
    <div className="w-[50%] flex rounded-md bg-green-600 p-2 gap-x-2 h-24 border-separate">
      <div className="flex flex-col justify-center items-center w-[20%]">
        <img
          src="https://media.istockphoto.com/id/1421948749/vector/simple-star-vector-black-line-icon-isolated.jpg?s=612x612&w=0&k=20&c=EKleOC6kVhNH7qh2S6ZcVZ4jb7zdrRnCAMtoPfgPdWQ="
          alt="Card image cap"
          className="rounded-t-md size-20"
        />
      </div>
      <div className="flex flex-col justify-between w-[80%]">
        <p>{data.items}</p>
        <div className="flex justify-between w-full">
          <div className="flex gap-x-3 w-[40%]">
            <button
              className="bg-primary"
              onClick={() => {
                navigate(`wishlist/${data.id}`);
              }}
            >
              Edit
            </button>
            <button
              className="bg-primary"
              onClick={() => {
                deletedWishList(data.id);
              }}
            >
              Delete
            </button>
          </div>
          <div className="w-[60%] flex justify-end">
            <button
              className="hover:opacity-50 active:opacity-100"
              style={
                data.isFulfield
                  ? { backgroundColor: "blue" }
                  : { backgroundColor: "red" }
              }
              onClick={() => {
                updatedStatusMyWishlist({ isFulfield: !data.isFulfield });
              }}
            >
              {data.isFulfield ? "Fulfilled" : "Unfulfilled"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
