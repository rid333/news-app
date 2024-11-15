import { PoynterTextRegular, FuturaBold } from "@/lib/fonts"
import { dummyNews } from "@/_mock/data"
import { Dot, CalendarClock, Eye } from "lucide-react";

const TrendingTopics = () => {
    return (
        <div className="flex flex-col gap-6 text-xl h-full">
            <div className={`${FuturaBold.className}} font-bold`}>Trending</div>
            <ul className="flex flex-col gap-6 h-full justify-between">
                {dummyNews.map(news => (
                    <li className="flex flex-col gap-1.5" key={news.id}>
                        <div className={`${PoynterTextRegular.className} text-lg`}>{news.title}</div>
                        <div className="flex text-xs gap-1">
                            <div className="flex gap-0.5 items-center"><Eye size={15} /> 1218 pembaca</div>
                            <Dot size={18} />
                            <div className="flex gap-0.5 items-center"><CalendarClock size={15} /> 8 Agustus 2024</div>
                        </div>
                        <div className="text-sm">{news.description?.slice(0, 85)}...</div>
                    </li >
                ))}
                {dummyNews.slice(0, 1).map(news => (
                    <li className="flex flex-col gap-1.5" key={news.id}>
                        <div className={`${PoynterTextRegular.className} text-lg`}>{news.title}</div>
                        <div className="flex text-xs gap-1">
                            <div className="flex gap-0.5 items-center"><Eye size={15} /> 1218 pembaca</div>
                            <Dot size={18} />
                            <div className="flex gap-0.5 items-center"><CalendarClock size={15} /> 8 Agustus 2024</div>
                        </div>
                        <div className="text-sm">{news.description?.slice(0, 85)}...</div>
                    </li >
                ))}
            </ul >
        </div >
    )
}

export default TrendingTopics;
