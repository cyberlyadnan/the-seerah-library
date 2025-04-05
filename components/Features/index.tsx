import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="About Us"
            paragraph="Started in 2009, Gsource offers a unique combination of end-to-end customized Engineering Design and Drawing Solutions. We're at the forefront of advanced technologies, like AI, machine learning, drone photogrammetry, LiDAR data processing, product design simulations, digital mockups, engineering designs, BIM, VDC & digital twins, while catering to clients across industries like construction, fabrication, architectural, structural, electrical, general contractors, civil, geospatial & manufacturing."
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
