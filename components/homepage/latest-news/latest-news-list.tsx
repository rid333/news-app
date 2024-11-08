import { PoynterTextRegular } from "@/lib/fonts"
import { CalendarClock, BookOpen, Dot } from "lucide-react"

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

import Gambar from "@/public/home.png"
import { StaticImageData } from "next/image"
import Image from "next/image"

interface DummyNews {
    id: number,
    title: string,
    time_read: number,
    description: string,
    img: StaticImageData
};

const LatestNewsList = () => {
    const dummyNews: DummyNews[] = [
        {
            id: 1,
            title: "Trump hires campaign aide as White House chief of staff",
            time_read: 5,
            description: "US President-elect Donald Trump has announced his campaign manager, Susan Summerall Wiles, will serve as his White House chief of staff when he takes over the presidency next year.",
            img: Gambar
        },
        {
            id: 2,
            title: "Seven things Trump says he will do as president",
            time_read: 6,
            description: "Donald Trump is set to return to the White House, having promised action on issues including immigration, the economy and the war in Ukraine.",
            img: Gambar
        },
        {
            id: 3,
            title: "US central bank boss says Trump can't fire him",
            time_read: 4,
            description: "The head of the US central bank has hit back at speculation that his post might be in jeopardy as Donald Trump prepares to assume power in Washington.",
            img: Gambar
        },
        {
            id: 4,
            title: "Did the US election polls fail? or not?",
            time_read: 8,
            description: "For much of the 2024 US presidential campaign, polls and pundits rated the race too close to call. Then Donald Trump delivered a commanding victory over Kamala Harris, winning at least five battleground states, and performing unexpectedly well in other places.",
            img: Gambar
        },
        {
            id: 5,
            title: "How small gains delivered Trump a big win",
            time_read: 3,
            description: "Votes are still being counted, but a picture is emerging of what tipped the balance in Trump’s favour: relatively small shifts in support in many different places.",
            img: Gambar
        }
    ]

    return (
        <>
            <ul className="flex justify-around">
                {dummyNews?.slice(0, 4).map(news => (
                    <li key={news.id}>
                        <Card className="border-none bg-background text-foreground">
                            <CardHeader>
                                <CardTitle className="text-lg text-foreground font-normal">
                                    <div className="w-[260px]">
                                        <AspectRatio ratio={16 / 9}>
                                            <Image src={news.img} fill={true} alt="desc" className="object-cover rounded-md" />
                                        </AspectRatio>
                                    </div>
                                    <div className={`${PoynterTextRegular.className} pt-1.5`}>{news.title}</div>
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
                                <p className="text-sm">{news.description.slice(0, 150)}...</p>
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
                    </li>
                ))}
            </ul>
        </>
    )
}

export default LatestNewsList;
