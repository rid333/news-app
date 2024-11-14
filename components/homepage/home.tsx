import Hero from "@/components/homepage/hero-section/hero";
import LatestNews from "@/components/homepage/latest-news/latest-news"
import EditorChoice from "@/components/homepage/editor-choice/editor-choice"
import TopNews from "@/components/homepage/top-news/top-news"

const Home = () => {
    return (
        <div className="flex flex-col gap-12">
            <Hero />
            <LatestNews />
            <div className="flex justify-between gap-6">
                <EditorChoice />
                <TopNews />
            </div>
        </div>
    );
};

export default Home;
