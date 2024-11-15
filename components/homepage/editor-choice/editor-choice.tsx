import { FuturaBold } from "@/lib/fonts"
import { NewsCardOverlay } from "@/components/global/news-card"
import { dummyNews } from "@/_mock/data"


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
