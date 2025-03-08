import React from "react";
 
export const ContactDetails: React.FC = () => {
  return (
<section className="flex-1 p-2.5 max-md:text-center">
<h2 className="mx-0 my-5 text-4xl font-bold text-zinc-800 max-md:text-3xl max-sm:text-3xl">
        Contact Details
</h2>
<div className="flex flex-col gap-2.5 mb-8 text-3xl text-zinc-800 max-md:text-2xl max-sm:text-xl">
<div className="flex gap-2.5 items-center">
<i className="ti ti-phone text-3xl max-sm:text-2xl" />
<span>+91-8888888888</span>
</div>
<div className="flex gap-2.5 items-center">
<i className="ti ti-mail text-3xl max-sm:text-2xl" />
<span>websupport@justdial.com</span>
</div>
</div>
 
      <h2 className="mx-0 my-5 text-4xl font-bold text-zinc-800 max-md:text-3xl max-sm:text-3xl">
        Address
</h2>
<address className="flex flex-col gap-2.5 mb-8 text-3xl text-zinc-800 max-md:text-2xl max-sm:text-xl not-italic">
<i className="ti ti-building text-3xl max-sm:text-2xl" />
<span>Palm Court Bldg M, 501/B, 5th Floor, New Link Road,</span>
<span>Beside Goregaon Sports Complex, Malad West,</span>
<span>Mumbai, Maharashtra 400064</span>
</address>
 
      <h2 className="mx-0 my-5 text-4xl font-bold text-zinc-800 max-md:text-3xl max-sm:text-3xl">
        Business Hours
</h2>
<div className="flex flex-col gap-2.5 mb-8 text-3xl text-zinc-800 max-md:text-2xl max-sm:text-xl">
<i className="ti ti-clock text-3xl max-sm:text-2xl" />
<time>Mon - Sun: 10:00 AM - 07:00 PM</time>
</div>
</section>
  );
};