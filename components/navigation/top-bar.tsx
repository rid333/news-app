import HamburgerMenu from "@/public/hamburger-menu.svg";
import { PoynterTextRegular } from "@/lib/fonts";

import Image from "next/image";
import MenuUser from "@/components/navigation/menu-user";
import Logo from "@/components/navigation/logo";

const TopBar = () => {
  return (
    <div className="px-8 py-3 flex justify-between items-center relative">
      <Image className="w-6 h-6" alt="Hamburger" src={HamburgerMenu} />
      <div
        className={`${PoynterTextRegular.className} absolute left-1/2 transform -translate-x-1/2`}
      >
        <Logo />
      </div>
      <div>
        <MenuUser />
      </div>
    </div>
  );
};

export default TopBar;
