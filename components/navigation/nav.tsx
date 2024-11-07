'use client'

import Link from "next/link";
import Logo from "./logo";
import MenuButton from "./menu-button";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import MenuUser from "./menu-user";

import { usePathname } from "next/navigation";

const Nav = () => {

    const pathName = usePathname();

    return (
        <header>
            <nav className="px-8 py-6">
                <ul className="flex justify-between items-center">
                    <Link href="/"><Logo /></Link>
                    <li>
                        <NavigationMenu>
                            <MenuButton
                                menu="Berita"
                                href="/"
                                description="some description 1"
                                underline={pathName === "/" ? true : false}
                            />
                            <MenuButton
                                menu="Politik"
                                href="/"
                                description="some descriphiburan"
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
                                description="some description 3"
                                underline={pathName === "/teknologi" ? true : false}
                            />
                            <MenuButton
                                menu="Sains"
                                href="/"
                                description="some description 3"
                                underline={pathName === "/sains" ? true : false}
                            />
                            <MenuButton
                                menu="Olahraga"
                                href="/"
                                description="some description 3"
                                underline={pathName === "/olahraga" ? true : false}
                            />
                            <MenuButton
                                menu="Hiburan"
                                href="/"
                                description="some description 3"
                                underline={pathName === "/hiburan" ? true : false}
                            />
                        </NavigationMenu>
                    </li>
                    <li>
                        <MenuUser />
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;
