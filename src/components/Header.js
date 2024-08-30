import React from "react";
import { LOGO_TEXT } from "../utils/constants";

const Header = () => {
  return (
    <div className="justify-center sm:justify-start w-full bg-darkBlack fixed flex items-center font-sans z-10">
      <p className="font-bold italic text-xl p-3 text-white">{LOGO_TEXT}</p>
    </div>
  );
};

export default Header;
