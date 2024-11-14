"use client";

import MenuButton from "./menu-button";
import TopBar from "@/components/navigation/top-bar";
import { NavigationMenu } from "@/components/ui/navigation-menu";

import { usePathname } from "next/navigation";

const Nav = () => {
    const pathName = usePathname();

    return (
        <>
            <div className="sticky top-0 z-50 bg-white">
                <TopBar />
            </div>
            <header>
                <div className="border-b-2 border-b-secondary">
                    <NavigationMenu className="px-8 py-1.5 m-auto">
                        <MenuButton
                            menu="Home"
                            href="/"
                            description="some description 1"
                            underline={pathName === "/" ? true : false}
                        />
                        <MenuButton
                            menu="Berita"
                            href="/"
                            description="some description 1"
                            underline={pathName === "/berita" ? true : false}
                        />
                        <MenuButton
                            menu="Politik"
                            href="/"
                            description="some description 2"
                            underline={pathName === "/politik" ? true : false}
                        />
                        <MenuButton
                            menu="Bisnis"
                            href="/"
                            description="some description 3"
                            underline={pathName === "/bisnis" ? true : false}
                        />
                        <MenuButton
                            menu="Teknologi"
                            href="/"
                            description="some description 4"
                            underline={pathName === "/teknologi" ? true : false}
                        />
                        <MenuButton
                            menu="Sains"
                            href="/"
                            description="some description 5"
                            underline={pathName === "/sains" ? true : false}
                        />
                        <MenuButton
                            menu="Olahraga"
                            href="/"
                            description="some description 6"
                            underline={pathName === "/olahraga" ? true : false}
                        />
                        <MenuButton
                            menu="Hiburan"
                            href="/"
                            description="some description 7"
                            underline={pathName === "/hiburan" ? true : false}
                        />
                    </NavigationMenu>
                </div>
            </header>
        </>
    );
};

export default Nav;
