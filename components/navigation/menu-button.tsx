'use client'

import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

interface menuProps {
    menu: string,
    href: string,
    description: string,
    underline?: boolean
}

const MenuButton = ({ menu, href, description, underline }: menuProps) => {
    return (
        <NavigationMenuList>
            <NavigationMenuItem>
                {underline ? (
                    <NavigationMenuTrigger className="text-base font-semibold relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:bottom-[-4px] after:left-0">{menu}</NavigationMenuTrigger>
                ) : (
                    <NavigationMenuTrigger className="text-base font-semibold relative after:content-[''] after:absolute after:w-full after:h-0 after:bg-primary after:bottom-[-4px] after:left-0 hover:after:h-0.5 hover:after:bg-primary hover:after:bottom-[-4px]">{menu}</NavigationMenuTrigger>
                )}
                <NavigationMenuContent>
                    <div className="w-full h-full p-6">
                        <NavigationMenuLink asChild>
                            <Link href={href}>{description}</Link>
                        </NavigationMenuLink>
                    </div>
                </NavigationMenuContent>
            </NavigationMenuItem>
        </NavigationMenuList>
    )
}

export default MenuButton;
