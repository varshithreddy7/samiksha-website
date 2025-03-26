"use client";

import * as React from "react";

import { FooterColumn } from "./FooterColumn";

import { FooterSocialLinks } from "./FooterSocialLinks";
 
const aboutLinks = [

  { text: "About Us", href: "#" },

  { text: "Disclaimer", href: "#" },

  { text: "Contact Us", href: "#" },

  { text: "Terms and Conditions", href: "#" },

  { text: "Privacy Policy", href: "#" },

  { text: "Careers", href: "#" },

  { text: "FAQs", href: "#" },

];
 
const informationLinks = [

  { text: "UPSC 2025", href: "#" },

  { text: "UPSC Syllabus 2025", href: "#" },

  { text: "UPSC Exam Pattern", href: "#" },

  { text: "IAS Salary", href: "#" },

  { text: "UPSC Age Limit", href: "#" },

  { text: "UPSC Calendar 2025", href: "#" },

  { text: "UPSC Interview", href: "#" },

  { text: "UPSC Optional Subjects List", href: "#" },

  { text: "UPSC Selection Process", href: "#" },

  { text: "UPSC CSAT Syllabus", href: "#" },

  { text: "UPSC Books", href: "#" },

  { text: "UPSC Previous Year Papers", href: "#" },

  { text: "UPSC Mains Result 2024", href: "#" },

  { text: "UPSC Cut Off", href: "#" },

  { text: "UPSC Current Affairs", href: "#" },

];
 
const coursesLinks = [

  { text: "GS Foundation Courses", href: "#" },

  { text: "UPSC Online Coaching", href: "#" },

  { text: "UPSC Study Material", href: "#" },

  { text: "UPSC Prelims Test Series", href: "#" },

  { text: "CSAT Coaching", href: "#" },

  { text: "UPSC Mains Test Series", href: "#" },

  { text: "Optional Test Series", href: "#" },

  { text: "UPSC Mock Interview", href: "#" },

  { text: "Current Affairs Course", href: "#" },

  { text: "UPSC Coaching in Chennai", href: "#" },

];
 
export const Footer: React.FC = () => {

  return (
<footer className="flex overflow-hidden flex-col pt-5 pr-20 pb-60 pl-13 bg-zinc-800 max-md:px-5 max-md:pb-24">
<div className="max-md:max-w-full">
<div className="flex gap-5 max-md:flex-col">
<FooterColumn title="About Samiksha" links={aboutLinks} />
<FooterColumn title="Information" links={informationLinks} />
<FooterColumn title="Courses" links={coursesLinks} />
</div>
</div>
<FooterSocialLinks />
</footer>

  );

};
 
export default Footer;

 