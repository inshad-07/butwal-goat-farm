import AboutSection from "@/components/Home/AboutSection";
import FaqSection from "@/components/Home/FaqSection";
import GoatBreedsSection from "@/components/Home/GoatBreedsSection";
import HeroVideo from "@/components/Home/HeroVideo";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <HeroVideo/>
    <AboutSection/>
    <GoatBreedsSection/>
    <FaqSection/>
   </div>
  );
}
