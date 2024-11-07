import HeadlineRelated from "@/components/homepage/hero-section/headline-related";
import Headline from "@/components/homepage/hero-section/headline";

const Hero = () => {
  return (
    <div className="flex gap-6">
      <Headline />
      <HeadlineRelated />
    </div>
  );
};

export default Hero;
