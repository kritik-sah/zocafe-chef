import Image from "next/image";
import React from "react";

const Navbar = (props: any) => {
  return (
    <nav className="w-full flex items-center justify-between h-[72px] zo-container">
      <div className="h-8 w-8 relative">
        <Image src="/assets/svgs/zo-white.svg" alt="Zo world logo" layout="fill" />
      </div>
      <p>{`${props?.orders?.length} Orders`}</p>
      <div className="h-12 w-12 relative">
        <Image src="/assets/svgs/more.svg" alt="more option" layout="fill" />
      </div>
    </nav>
  );
};

export default Navbar;
