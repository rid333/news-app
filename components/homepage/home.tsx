import Hero from "@/components/homepage/hero-section/hero";
import LatestNews from "@/components/homepage/latest-news/latest-news"

const Home = () => {
    return (
        <div className="flex flex-col gap-12">
            <Hero />
            <LatestNews />
        </div>
    );
};

export default Home;
