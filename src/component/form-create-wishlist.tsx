import { useAppSelector } from "../store";
import { MyWishlist } from "../types/stores";
import { intialName } from "../utils/initial-name";

type FormCreateWishlistProps = {
  handleCreateWishlist: () => void;
  isEdit?: MyWishlist;
  children: React.ReactNode;
  buttonText: string;
};

export const FormCreateWishlist: React.FC<FormCreateWishlistProps> = ({
  handleCreateWishlist,
  children,
  buttonText,
}) => {
  const wishlist = useAppSelector((state) => state.auth.user);
  return (
    <div className="bg-green-950 flex w-[50%] h-28 rounded-md">
      <div className="w-[10%] flex justify-center items-center">
        <div className="w-14 h-14 rounded-full bg-green-700 flex justify-center items-center">
          <span>{wishlist.name ? intialName(wishlist.name): ""}</span>
        </div>
      </div>
      <form
        className="w-[90%] flex justify-center "
        onSubmit={handleCreateWishlist}
      >
        <div className=" w-[80%] flex justify-center items-center">
          
          {children}
        </div>
        <div className=" w-[20%] justify-center flex items-center">
          <button type="submit">{buttonText}</button>
        </div>
      </form>
    </div>
  );
};
