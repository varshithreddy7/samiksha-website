import HeroSection from "../../components/ui/landingPage/HeroSection";
import TestimonialCarousel from "../../components/ui/landingPage/Testimonials";

import {CourseCarousel} from "../../components/ui/landingPage/CourseGrid";
import TopRankers from "../../components/ui/landingPage/TopRankers";
import AboutFrame from "../../components/ui/landingPage/AboutFrame";
import ExpertMentors from "../../components/ui/landingPage/ExpertMentors";
import FaqSection from "../../components/ui/landingPage/FaqSection";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <AboutFrame/>
      
      <CourseCarousel/>
      <ExpertMentors/>
      <TestimonialCarousel/>
    
      <TopRankers/>
    <FaqSection/>
      
      
    </div>
  );
}
