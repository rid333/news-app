import { PoynterTextRegular } from "@/lib/fonts"
import { CalendarClock, BookOpen, Dot } from "lucide-react"

interface DummyNews {
    id: number,
    title: string,
    time_read: number;
    description: string,
};

const HeadlineRelated = () => {

    const dummy_news: DummyNews[] = [{
        id: 1,
        title: "Trump hires campaign aide as White House chief of staff",
        time_read: 5,
        description: "US President-elect Donald Trump has announced his campaign manager, Susan Summerall Wiles, will serve as his White House chief of staff when he takes over the presidency next year.",
    },
    {
        id: 2,
        title: "Seven things Trump says he will do as president",
        time_read: 6,
        description: "Donald Trump is set to return to the White House, having promised action on issues including immigration, the economy and the war in Ukraine.",
    },
    {
        id: 3,
        title: "US central bank boss says Trump can't fire him",
        time_read: 4,
        description: "The head of the US central bank has hit back at speculation that his post might be in jeopardy as Donald Trump prepares to assume power in Washington.",
    },
    {
        id: 4,
        title: "Did the US election polls fail?",
        time_read: 8,
        description: "For much of the 2024 US presidential campaign, polls and pundits rated the race too close to call. Then Donald Trump delivered a commanding victory over Kamala Harris, winning at least five battleground states, and performing unexpectedly well in other places.",
    },
    {
        id: 5,
        title: "How small gains delivered Trump a big win",
        time_read: 3,
        description: "Votes are still being counted, but a picture is emerging of what tipped the balance in Trump’s favour: relatively small shifts in support in many different places.",
    }
    ]

    return (
        <ul className="flex flex-col">
            {dummy_news?.slice(0, 3).map((news) => (
                <li className="flex flex-col p-2 bg-background gap-1.5" key={news.id}>
                    <div className={PoynterTextRegular.className}>{news.title}</div>
                    <div className="text-xs flex items-center gap-x-1.5">
                        <BookOpen size={12} /> {news.time_read} menit
                    </div>
                    <div className="text-sm">{news.description.slice(0, 95)}...</div>
                </li>
            ))}
        </ul>
    );
};

export default HeadlineRelated;
