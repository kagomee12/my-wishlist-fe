import { useAppSelector } from "../../store";
import { intialName } from "../../utils/initial-name";

export const ProfileLayout = () => {
  const wishlist = useAppSelector((state) => state.auth.user);
  return (
    <div className="w-[70%] bg-green-700 h-[80%] rounded-xl flex p-2 flex-col">
      <div>
        <h1 className="text-center">My Profile</h1>
      </div>

      <div className="flex h-full">
        <div className="w-[40%] flex justify-center items-center">
          <div className="w-[85%] h-[90%] rounded-full bg-primary flex justify-center items-center">
            <span className="text-[900%]">
              {wishlist.name ? intialName(wishlist.name) : ""}
            </span>
          </div>
        </div>
        <div className="w-[60%] h-full flex flex-col py-16 gap-4">
          <span className="text-4xl text-primary font-bold">
            Name: {wishlist.name ? wishlist.name : "No Name"}
          </span>
          <span className="text-4xl text-primary font-bold">
            Email: {wishlist.email ? wishlist.email : "No Email"}
          </span>
          <span className="text-4xl text-primary font-bold">
            Gender: {wishlist.gender ? wishlist.gender : "No Gender"}
          </span>
          <div>
          <a href="/edit">
            <button>
              edit profile
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
