"use client";

import { Roboto } from "next/font/google";
import Navbar from "./components/Header";
import HeroSection from "./ui/HeroSection";
import AboutSection from "./ui/AboutSection";
import BlogSection from "./ui/BlogSection";
import Achivement from "./ui/Achivements";
import TextCard from "./ui/OurProcess";
import Footer from "./components/Footer";
import Subscription from "./ui/Subscribe";
// import ResponsiveCarousel from "./components/Slider";

import Testimonial from "./ui/Testimonial";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Homepage = () => {
  return (
    <div className={roboto.className}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <BlogSection />
      <Achivement />
      <TextCard />
    <Testimonial />

      <Subscription />
      <Footer />

    </div>
  );
};

export default Homepage;
