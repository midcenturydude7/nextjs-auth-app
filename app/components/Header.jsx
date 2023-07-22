import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <nav className="bg-blue-700 py-4 px-6 flex items-center justify-between mb-5"></nav>
      <div className="flex items-center">
        <Link href="/">
          <div className="text-lg uppercase font-bold text-white">
            Clerk App
          </div>
        </Link>
      </div>
    </>
  );
};

export default Header;
