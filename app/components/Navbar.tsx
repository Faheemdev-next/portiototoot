import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full md:w-1/4 p-2 rounded-2xl mx-auto  flex items-center justify-center border gap-5 ">
        <Link className="text-black font-thin" href="/">
          Projects
        </Link>
        <Link className="text-black font-thin" href="/">
          About
        </Link>
        <Link className="text-black font-thin" href="/">
          Skills
        </Link>
    
     
    </div>
  );
};

export default Navbar;
