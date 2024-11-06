import Link from "next/link";
import Logo from "./logo";
import MenuButton from "./menu-button";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import MenuUser from "./menu-user";

const Nav = async () => {
    return (
        <header>
            <nav className="p-6">
                <ul className="flex justify-between items-center">
                    <Link href="/"><Logo /></Link>
                    <li>
                        <NavigationMenu>
                            <MenuButton
                                menu="Berita"
                                href="/"
                                description="some description 1"
                                underline={true}
                            />
                            <MenuButton
                                menu="Politik"
                                href="/"
                                description="some description 2"
                            />
                            <MenuButton
                                menu="Bisnis"
                                href="/"
                                description="some descriptio 3"
                            />
                            <MenuButton
                                menu="Teknologi"
                                href="/"
                                description="some descriptio 3"
                            />
                            <MenuButton
                                menu="Sains"
                                href="/"
                                description="some descriptio 3"
                            />
                            <MenuButton
                                menu="Olahraga"
                                href="/"
                                description="some descriptio 3"
                            />
                            <MenuButton
                                menu="Hiburan"
                                href="/"
                                description="some descriptio 3"
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
