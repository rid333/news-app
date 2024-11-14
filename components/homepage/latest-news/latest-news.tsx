import { MoveRight } from "lucide-react";
import { FuturaBold } from "@/lib/fonts";
import LatestNewsList from "@/components/homepage/latest-news/latest-news-list";
import Link from "next/link";

const LatestNews = () => {
    return (
        <div className="flex flex-col gap-3">
            <div className={`flex justify-between text-2xl font-bold text-foreground ${FuturaBold.className}`}>
                <div>Berita Terbaru</div>
                <Link href="/" className="flex justify-center items-center gap-1.5 hover:underline">Lainnya <MoveRight className="w-6 h-6" /></Link>
            </div>
            <LatestNewsList />
        </div>
    )
}

export default LatestNews;
