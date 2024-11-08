import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { BellDot } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const MenuUser = () => {
    const session = false;
    return (
        <>
            {session ? (
                <div className="flex justify-center items-center gap-6">
                    <BellDot size={24} />
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                            <DropdownMenuLabel>Alridho</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Sign out</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            ) : (
                <div
                    className={cn(
                        "flex justify-center items-center gap-3",
                        `${inter.className}`,
                    )}
                >
                    <Button className="font-bold" variant={"default"}>
                        Subscribe
                    </Button>
                    <Button className="font-bold" variant={"outline"}>
                        Sign In
                    </Button>
                </div>
            )}
        </>
    );
};

export default MenuUser;
