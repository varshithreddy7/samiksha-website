import Image from "next/image";
import HeroSection from "../../components/ui/HeroSection";
import TestimonialCarousel from "../../components/ui/Testimonials";
import MissionVision from "../../components/ui/MissionAndVision";
import OurFounder from "../../components/ui/OurFounder";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <MissionVision/>
      <TestimonialCarousel/>
      <OurFounder/>
    </div>
  );
}
