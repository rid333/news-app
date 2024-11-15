import { PoynterTextRegular } from "@/lib/fonts";
import { Dot, CalendarClock, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";

const Headline = () => {
    return (
        <div className=" flex justify-center items-center gap-6">
            <div className="flex flex-col gap-3 w-[300px]">
                <div
                    className={cn(
                        "text-3xl hover:text-primary cursor-pointer transition",
                        `${PoynterTextRegular.className}`,
                    )}
                >
                    What Trump's win means for Ukraine, Middle East and China
                </div>
                <div className="flex text-sm">
                    <div className="flex justify-center items-center gap-x-1.5">
                        <CalendarClock size={16} /> Satu jam yang lalu
                    </div>
                    <Dot />
                    <div className="flex justify-center items-center gap-x-1.5">
                        <BookOpen size={16} /> 6 menit
                    </div>
                </div>
                <div className="text-base">
                    Donald Trump’s return to the White House is set to reshape US foreign
                    policy, promising potentially radical shifts on multiple fronts as war
                    and uncertainty grip parts of the world...
                </div>
                <div className="flex gap-2 flex-wrap">
                    <Badge className="cursor-pointer" variant={"default"}>
                        Politik
                    </Badge>
                    <Badge className="cursor-pointer" variant={"default"}>
                        Bisnis
                    </Badge>
                    <Badge className="cursor-pointer" variant={"default"}>
                        Internasional
                    </Badge>
                </div>
            </div>
            <div className="w-[500px] overflow-hidden rounded-md">
                <AspectRatio ratio={5 / 4}>
                    <Image
                        fill={true}
                        src="/home.png"
                        alt="Image"
                        className="rounded-md object-cover hover:scale-110 transition-all duration-500 cursor-pointer"
                    />
                </AspectRatio>
            </div>
        </div>
    );
};

export default Headline;
