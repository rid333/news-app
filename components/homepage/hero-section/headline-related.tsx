import { PoynterTextRegular } from "@/lib/fonts"
import { BookOpen } from "lucide-react"
import { cn } from "@/lib/utils"
import { dummyNews } from "@/_mock/data"


const HeadlineRelated = () => {
    return (
        <ul className="flex flex-col">
            {dummyNews?.slice(0, 3).map((news) => (
                <li className="flex flex-col p-2 bg-background gap-1.5" key={news.id}>
                    <div className={cn(("hover:text-primary cursor-pointer text-lg"), (`${PoynterTextRegular.className}`))}>{news.title}</div>
                    <div className="text-xs flex items-center gap-x-1.5">
                        <BookOpen size={12} /> {news.time_read} menit
                    </div>
                    <div className="text-sm">{news.description?.slice(0, 95)}...</div>
                </li>
            ))}
        </ul>
    );
};

export default HeadlineRelated;
