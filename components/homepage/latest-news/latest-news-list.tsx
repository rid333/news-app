import { NewsCardNormal } from "@/components/global/news-card"
import { dummyNews } from "@/_mock/data"

const LatestNewsList = () => {
    return (
        <>
            <ul className="flex justify-center gap-3">
                {dummyNews?.slice(0, 4).map(news => (
                    <li key={news.id}>
                        <NewsCardNormal {...news} />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default LatestNewsList;
