import { Link } from "react-router-dom";
import { LogoutButton } from "./logout-button";

export const Navbar = () => {
  const menuNavbar = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Profile",
      link: "/profile",
    },
  ];
  return (
    <div className="bg-green-600 w-full justify-center flex p-3 h-20">
      <div className="flex justify-between items-center w-[95%]">
        <ul className="flex items-center p-4 gap-x-5">
          {menuNavbar.map((item) => (
            <li>
              <Link
                to={`${item.link}`}
                className="text-primary hover:text-gray-700 hover:text-2xl font-bold text-xl"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <LogoutButton />
      </div>
    </div>
  );
};
