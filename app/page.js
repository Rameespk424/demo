"use client";

import { Roboto } from "next/font/google";
import Navbar from "./components/Header";
import HeroSection from "./ui/HeroSection";
import AboutSection from "./ui/AboutSection";
import BlogSection from "./ui/BlogSection";
import Achivement from "./ui/Achivements";
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
    </div>
  );
};

export default Homepage;
