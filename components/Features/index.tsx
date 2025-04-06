import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-20">
        <div className="container w-full md:w-[70%] mx-auto">
          <SectionTitle
            title="About Us"
            paragraph="The Seerah Library is a platform designed for Muslims and seekers of knowledge to find, review, and share thoughts on authentic books about the life of Prophet Muhammad ﷺ. Our goal is to help people around the world discover the beauty of his Seerah through trusted literature."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
