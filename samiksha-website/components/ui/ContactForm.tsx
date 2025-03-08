"use client";
import React from "react";
import { FormSection } from "./FormSection";
import { ContactDetails } from "./ContactDetails";
 
const ContactForm: React.FC = () => {
  return (
<>
<link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Nunito:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
<main className="flex gap-10 p-5 mx-auto my-0 bg-white max-w-[1440px] max-md:flex-col max-md:p-4 justify-between">
<FormSection />
<ContactDetails />
</main>
</>
  );
};
 
export default ContactForm;