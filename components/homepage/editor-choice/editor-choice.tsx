import { FuturaBold } from "@/lib/fonts"
import { NewsCardOverlay } from "@/components/global/news-card"
import { NewsCardType } from "@/lib/types"

const dummyNews: NewsCardType[] = [
    {
        id: 1,
        title: "Trump hires campaign aide as White House chief of staff",
        time_read: 5,
        description: "US President-elect Donald Trump has announced his campaign manager, Susan Summerall Wiles, will serve as his White House chief of staff when he takes over the presidency next year.",
        img: "/home.png"
    },
    {
        id: 2,
        title: "Seven things Trump says he will do as president",
        time_read: 6,
        description: "Donald Trump is set to return to the White House, having promised action on issues including immigration, the economy and the war in Ukraine.",
        img: "/home1.png"
    },
    {
        id: 3,
        title: "US central bank boss says Trump can't fire him",
        time_read: 4,
        description: "The head of the US central bank has hit back at speculation that his post might be in jeopardy as Donald Trump prepares to assume power in Washington.",
        img: "/home2.png"
    },
    {
        id: 4,
        title: "Did the US election polls fail? or not?",
        time_read: 8,
        description: "For much of the 2024 US presidential campaign, polls and pundits rated the race too close to call. Then Donald Trump delivered a commanding victory over Kamala Harris, winning at least five battleground states, and performing unexpectedly well in other places.",
        img: "/home3.png"
    },
    {
        id: 5,
        title: "How small gains delivered Trump a big win",
        time_read: 3,
        description: "Votes are still being counted, but a picture is emerging of what tipped the balance in Trump’s favour: relatively small shifts in support in many different places.",
        img: "/home4.png"
    }
]

const EditorChoice = () => {
    return (
        <div className={`flex flex-col gap-6 text-2xl font-bold w-full ${FuturaBold.className}`}>
            <div className="text-foreground">Pilihan Editor</div>
            <ul className="grid grid-cols-3 gap-3">
                <li className="col-span-2 row-span-2">
                    <NewsCardOverlay {...dummyNews[0]} />
                </li>
                <li className="">
                    <NewsCardOverlay {...dummyNews[1]} />
                </li>
                <li>
                    <NewsCardOverlay {...dummyNews[2]} />
                </li>
                <li>
                    <NewsCardOverlay {...dummyNews[3]} />
                </li>
                <li>
                    <NewsCardOverlay {...dummyNews[4]} />
                </li>
                <li>
                    <NewsCardOverlay {...dummyNews[0]} />
                </li>
            </ul>
        </div>
    )
}

export default EditorChoice;
