import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-3 gap-8 px-6">
        {/* About Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">About Samiksha</h3>
          <ul className="space-y-2">
            {["About Us", "Disclaimer", "Contact Us", "Terms and Conditions", "Privacy Policy", "Careers", "FAQs"].map((item) => (
              <li key={item} className="hover:underline cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>
        
        {/* Information Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Information</h3>
          <ul className="space-y-2">
            {["UPSC 2025", "UPSC Syllabus 2025", "UPSC Exam Pattern", "IAS Salary", "UPSC Age Limit", "UPSC Calendar 2025", "UPSC Interview", "UPSC Optional Subjects List", "UPSC Selection Process", "UPSC CSAT Syllabus", "UPSC Books", "UPSC Previous Year Papers", "UPSC Mains Result 2024", "UPSC Cut Off", "UPSC Current Affairs"].map((item) => (
              <li key={item} className="hover:underline cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* Courses Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Courses</h3>
          <ul className="space-y-2">
            {["GS Foundation Courses", "UPSC Online Coaching", "UPSC Study Material", "UPSC Prelims Test Series", "CSAT Coaching", "UPSC Mains Test Series", "Optional Test Series", "UPSC Mock Interview", "Current Affairs Course", "UPSC Coaching in Chennai"].map((item) => (
              <li key={item} className="hover:underline cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
