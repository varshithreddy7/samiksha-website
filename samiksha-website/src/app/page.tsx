import Image from "next/image";
import HeroSection from "../../components/ui/HeroSection";
import TestimonialCarousel from "../../components/ui/Testimonials";
import OurFounder from "../../components/ui/FounderSection";
import { CourseGrid } from "../../components/ui/CourseGrid";
import MissionVisionContainer from "../../components/ui/MissionAndVision";
import TopRankers from "../../components/ui/TopRankers";
import FounderSection from "../../components/ui/FounderSection";
import FacultyPanel from "../../components/ui/FacultyPanel";
import { ContactDetails } from "../../components/ui/ContactDetails";
import ContactForm from "../../components/ui/ContactForm";
import Container from "../../components/ui/Container";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Container/>
      <MissionVisionContainer/>
      <TopRankers/>
      <TestimonialCarousel/>
      <FounderSection/>
      <FacultyPanel/>
      <ContactForm/>
      
    </div>
  );
}
