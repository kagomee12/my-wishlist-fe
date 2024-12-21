import { EditWishlistLayout } from "../features/edit-wishlist/edit-wishlist-layout";
import { useParams } from "react-router-dom";

const EditWishlist = () => {
  const { id } = useParams();
  return (
    <div className="h-full w-screen flex justify-center items-center">
      <EditWishlistLayout id={id ?? ""} />
    </div>
  );
};

export default EditWishlist;
