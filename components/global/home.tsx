import { FuturaBold } from "@/lib/fonts";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { NewsCardOverlay } from "./news-card";

import { dummyNews } from "@/_mock/data"

const Home = () => {
    return (
        <div className="flex flex-col w-full">
            <div className={`flex justify-between text-2xl font-bold text-foreground ${FuturaBold.className}`}>
                <div>Berita Terbaru</div>
                <Link href="/" className="flex justify-center items-center gap-1.5 hover:underline">Lainnya <MoveRight className="w-6 h-6" /></Link>
            </div>
        </div>
    )
}

export default Home;
