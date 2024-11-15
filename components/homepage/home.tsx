import Hero from "@/components/homepage/hero-section/hero";
import LatestNews from "@/components/homepage/latest-news/latest-news"
import EditorChoice from "@/components/homepage/editor-choice/editor-choice"
import TopNews from "@/components/homepage/top-news/top-news"
import TrendingTopics from "@/components/homepage/trending-topics/trending-topics"

const Home = () => {
    return (
        <div className="flex flex-col gap-12">
            <Hero />
            <LatestNews />
            <div className="flex flex-col">
                <div className="flex justify-between gap-6">
                    <EditorChoice />
                    <div className="w-[400px] flex flex-col gap-6">
                        <TrendingTopics />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
