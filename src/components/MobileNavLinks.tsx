import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { LogoutOptions, useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
  const { logout } = useAuth0();
  return (
    <>
      <Link
        to="/user-profile"
        className="flex bg-white items-center font-bold hover:text-yellow-500 "
      >
        User Profile
      </Link>

      <Button
        onClick={() =>
          logout({
            returnTo: import.meta.env.VITE_AUTH0_CALLBACK_URL,
          } as LogoutOptions)
        }
        className="flex items-center px-3 font-bold hover:bg-gray-500"
      >
        Log Out
      </Button>
    </>
  );
};

export default MobileNavLinks;
