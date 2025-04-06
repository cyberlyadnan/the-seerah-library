import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import FeaturedBooks from "@/components/Featured Books";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Seerah Library",
  description: "Discover, review, and reflect on authentic books that narrate the life and legacy of the Prophet Muhammad (ﷺ). The Seerah Library brings together readers and seekers from around the world—offering detailed book reviews, scholarly insights, and a trusted platform to explore the Seerah like never before.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <FeaturedBooks />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      {/* <Pricing /> */}
      <Blog />
      <Contact />
    </>
  );
}
