import { PoynterTextRegular, FuturaRegular } from "@/lib/fonts"
import { CalendarClock, BookOpen, Dot } from "lucide-react"
import { NewsCardType } from "@/lib/types"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export const NewsCardNormal = ({ title, description, img }: NewsCardType) => {
    return (
        <Card className="bg-card text-foreground">
            <CardHeader>
                <CardTitle className="text-lg text-foreground font-normal">
                    <div className="w-[260px]">
                        <AspectRatio ratio={16 / 9}>
                            {img && <Image src={img} fill={true} alt="desc" className="object-cover rounded-md" />}
                        </AspectRatio>
                    </div>
                    <div className={`${PoynterTextRegular.className} pt-1.5`}>{title}</div>
                </CardTitle>
                <CardDescription>
                    <div className="flex items-center text-xs">
                        <div className="flex justify-center items-center gap-x-1.5">
                            <CalendarClock size={15} /> Satu jam yang lalu
                        </div>
                        <Dot />
                        <div className="flex justify-center items-center gap-x-1.5">
                            <BookOpen size={15} /> 6 menit
                        </div>
                    </div>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm">{description?.slice(0, 150)}...</p>
            </CardContent>
            <CardFooter>
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
            </CardFooter>
        </Card>

    )
}

export const NewsCardOverlay = ({ title, description, img }: NewsCardType) => {
    return (
        <Card className={`border-none text-foreground bg-background relative ${FuturaRegular.className}`}>
            <div className="text-secondary">
                <AspectRatio>
                    {img && <Image src={img} fill={true} alt="desc" className="object-cover rounded-md" />}
                    <div className="absolute inset-0 bg-black bg-opacity-40 rounded-md p-4 flex flex-col gap-3 justify-end">
                        <div className="flex items-center gap-x-1.5 text-sm">
                            <BookOpen size={13} /> 6 menit
                        </div>
                        <h2 className={`text-xl ${PoynterTextRegular.className}`}>{title}</h2>
                        <h3 className="text-sm">{description?.slice(0, 90)}...</h3>
                        <div className="text-sm flex gap-x-2 flex-wrap">
                            <Badge className="cursor-pointer" variant={"secondary"}>
                                Politik
                            </Badge>
                            <Badge className="cursor-pointer" variant={"secondary"}>
                                Bisnis
                            </Badge>
                            <Badge className="cursor-pointer" variant={"secondary"}>
                                Internasional
                            </Badge>
                        </div>
                    </div>
                </AspectRatio>
            </div>
        </Card>
    )
}
