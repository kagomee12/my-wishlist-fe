import React from "react";
import { Link } from "react-router-dom";

export const AuthForm = ({
  children,
  titleButton,
  action,
  verifyText1,
  verifyText2,
  link,
}: {
  children: React.ReactNode;
  titleButton: string;
  action: () => void;
  verifyText1?: string;
  verifyText2?: string;
  link?: string;
}) => {
  return (
    <div className="gap-y-3 flex flex-col">
      <form className="w-full flex flex-col gap-y-4" onSubmit={action}>
        {children}
        <button
          className="h-12 bg-gray-800 text-white hover:opacity-50 active:opacity-100"
          type="submit"
        >
          {titleButton}
        </button>
      </form>
      <p className="text-primary">
        {verifyText1}{" "}
        <Link to={link ?? ""} className="text-black underline hover:text-white">
          {verifyText2}
        </Link>
      </p>
    </div>
  );
};
