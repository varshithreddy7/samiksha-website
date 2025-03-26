"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ImageItem {
  src: string;
  text: string;
}

const images: ImageItem[] = [
  { src: "/images/img-student.png", text: "Rajat Vora I am immensely grateful to the faculty members for their invaluable guidance and unwavering support throughout my UPSC preparation journey. Their assistance has been instrumental in my progress at every stage." },
  { src: "/images/img-student.png", text: "Rajat Vora I am immensely grateful to the faculty members for their invaluable guidance and unwavering support throughout my UPSC preparation journey. Their assistance has been instrumental in my progress at every stage." },
  { src: "/images/img-student.png", text: "Rajat Vora I am immensely grateful to the faculty members for their invaluable guidance and unwavering support throughout my UPSC preparation journey. Their assistance has been instrumental in my progress at every stage." },
  { src: "/images/img-student.png", text: "Rajat Vora I am immensely grateful to the faculty members for their invaluable guidance and unwavering support throughout my UPSC preparation journey. Their assistance has been instrumental in my progress at every stage." },
  { src: "/images/img-student.png", text: "Rajat Vora I am immensely grateful to the faculty members for their invaluable guidance and unwavering support throughout my UPSC preparation journey. Their assistance has been instrumental in my progress at every stage." },
  { src: "/images/img-student.png", text: "Rajat Vora I am immensely grateful to the faculty members for their invaluable guidance and unwavering support throughout my UPSC preparation journey. Their assistance has been instrumental in my progress at every stage." },
];

export default function TestimonialCarousel() {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="flex flex-col items-center my-6 bg-[#0F6CB4] py-16">
      <h2 className="text-4xl font-bold mb-4 text-white font-medium">What Students Say?</h2>
      <div className="w-full max-w-7xl py-8">
        <Slider {...settings}>
          {images.map((item, i) => (
            <div key={i} className="p-4">
              <div className="rounded-lg p-4 flex flex-col text-center items-center">
                <img src={item.src} className="w-auto h-[100px] rounded-full" alt={item.text} />
                <p className="mt-2 text-white">{item.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
