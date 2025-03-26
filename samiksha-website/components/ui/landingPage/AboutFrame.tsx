"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutFrame: React.FC = () => {
    const features = [
        {
            title: "Samiksha Academy Faculty",
            items: [
                "Guidance from prominent Administrators (Retd. & Serving Officers)",
                "Motivational talks, Personality Development, and Confidence-building ",

            ],
        },
        {
            title: "Experienced Mentors",
            items: [
                "Guidance from prominent Administrators (Retd. & Serving Officers)",
                "Motivational talks, Personality Development, and Confidence-building ",

            ],
        },
    ];

    const additionalFeatures = [
        {
            title: "Samiksha Academy Faculty",
            items: [
                "Top Educators for each subject",
                "Well-experienced team and highly qualified teaching faculty",
                "Subject Experts",
                "One-on-one Interactions",
            ],
        },
        {
            title: "Samiksha Academy Faculty",
            items: [
                "Top Educators for each subject",
                "Well-experienced team and highly qualified teaching faculty",
                "Subject Experts",
                "One-on-one Interactions",
            ],
        },
    ];

    return (
        <main className="relative pt-24 mx-auto my-0 w-full bg-white max-w-[1440px]">
            {/* About Header */}
            <header className="flex items-center justify-between px-28 py-0 mb-12 max-md:flex-col max-md:px-5 max-md:text-center">
                {/* Left Section */}
                <motion.div
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <svg
                        width="50"
                        height="56"
                        viewBox="0 0 71 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative top-[0px]"
                        style={{ transform: "rotate(-5.301deg)" }}
                    >
                        <path d="M17.0106 50.8417L40.4583 2.46875" stroke="#0F6CB4" strokeWidth="5" />
                        <path d="M31.3202 53.5313L54.7678 5.15833" stroke="#0F6CB4" strokeWidth="5" />
                    </svg>
                    <div className="flex flex-col pr-10 left-0">
                        <h1 className="text-3xl font-extrabold text-sky-700 max-sm:text-4xl"> ABOUT</h1>
                        <h2 className="text-4xl font-extrabold tracking-wider max-sm:text-3xl mt-3">SAMIKSHA ACADEMY</h2>
                    </div>
                </motion.div>

                {/* Divider */}
                <motion.div
                    className="h-[150px] w-px bg-gray-900 max-md:hidden"
                    initial={{ opacity: 0, scaleY: 0 }}
                    whileInView={{ opacity: 1, scaleY: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                />

                {/* Right Section */}
                <motion.div
                    className="flex items-center space-x-6 max-md:flex-col pl-20 w-full"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                >
                    <h2 className="text-4xl font-extrabold tracking-wider max-w-[481px] max-md:my-5 max-sm:text-3xl">
                        <span className="text-sky-700">Achieve Excellence</span>
                        <span> and Stand Out from the Rest!</span>
                    </h2>
                    <motion.button
                        className="px-6 py-3 text-xl font-bold text-white bg-sky-700 rounded-lg max-sm:text-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                    >
                        Learn More
                    </motion.button>
                </motion.div>
            </header>




            {/* Background Shape & Image Gallery */}
            <div className="relative">
                <svg
                    width="795"
                    height="779"
                    viewBox="0 0 795 779"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute w-[800px] h-[860px] top-[0] left-[530px] opacity-100 "
                >
                    <path
                        opacity="0.2"
                        d="M26.9041 440.802C-8.28356 424.039 -8.95182 374.195 25.7738 356.496L714.387 5.50838C746.015 -10.6123 783.412 12.8039 782.722 48.2962L776.958 344.786L794.053 729.738C795.627 765.163 758.9 789.505 726.887 774.255L26.9041 440.802Z"
                        fill="#0F6CB4"
                    />
                </svg>


                <section className="relative">
                    <motion.img
                        src="/images/about-video.png"
                        className="block mx-auto my-0 rounded-2xl border-sky-700 border-solid border-[10px] h-[352px] w-[710px] max-md:static max-md:h-auto max-md:w-[90%]"
                        alt="Indian Express News"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                </section>
            </div>

            <h2 className="mt-10 text-5xl font-extrabold text-center max-sm:text-4xl">
                Nataraj Pydi
            </h2>

            {/* Information Section */}
            <section className="p-14 mt-10 bg-[#7A81941A] bg-opacity-10 rounded-[50px]">
                <div className="p-5 mx-auto my-0 text-3xl font-extrabold text-center text-white bg-sky-700 w-[551px] max-sm:w-full max-sm:text-2xl">
                    Together, We Strive for Excellence!
                </div>

                <article className="mt-10 text-center">
                    <h2 className="mb-5 text-4xl font-black max-sm:text-3xl">
                        WHY SAMIKSHA ACADEMY?
                    </h2>
                    <p className="mx-auto my-0 text-xl font-medium leading-normal max-w-[971px] max-sm:text-base">
                        Samiksha Academy supports aspiring IAS Officers with the proper
                        education, knowledge, and practical skills to propel India towards
                        growth and development. If you aim to join National Civil Services –
                        IAS, IPS, and other top Government Services, we have the perfect
                        program for your Civil Service Examination. Be ahead of your
                        competitors, and let's build our nation ready for social, economic,
                        and technological transformation ahead.
                    </p>
                </article>

                {/* Feature Grid */}
                <section className="grid gap-6 mt-12 grid-cols-[repeat(2,1fr)] max-md:grid-cols-[1fr] justify-center items-center place-items-center">
                    {features.map((feature, index) => (
                        <motion.article
                            key={index}
                            className="p-4 bg-white rounded-lg shadow-lg w-[500px] max-sm:w-full"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                        >
                            <h3 className="mb-4 text-xl font-bold text-sky-700 max-sm:text-lg">
                                {feature.title}
                            </h3>
                            <div className="text-md text-black max-sm:text-base">
                                {feature.items.map((item, itemIndex) => (
                                    <p key={itemIndex} className="mb-2">
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </motion.article>
                    ))}
                </section>


                {/* Centered Content Section */}
                <section className="flex justify-center items-center  mt-12 max-md:flex-col px-5">
                    <motion.article
                        className="p-4 bg-white rounded-lg shadow-lg w-[500px] max-sm:w-full"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h3 className="mb-4 text-xl font-bold text-sky-700 max-sm:text-lg">
                            Holistic Learning Approach
                        </h3>
                        <p className="text-md text-black max-sm:text-base">
                        Guidance from prominent Administrators (Retd. & Serving Officers),<br/>Motivational talks, Personality Development, and Confidence-building                         </p>
                    </motion.article>

                    <motion.img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a84efa7baf5c3c383081c86d806c31e80a8df960"
                        className="block mx-auto my-6 h-[150px] rounded-full w-[150px]"
                        alt="Academy Logo"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    />

                    <motion.article
                        className="p-4 bg-white rounded-lg shadow-lg w-[500px] max-sm:w-full"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h3 className="mb-4 text-xl font-bold text-sky-700 max-sm:text-lg">
                            Personalized Mentorship
                        </h3>
                        <p className="text-md text-black max-sm:text-base">
                        Guidance from prominent Administrators (Retd. & Serving Officers),<br/>Motivational talks, Personality Development, and Confidence-building                         
                        </p>
                    </motion.article>
                </section>

                {/* Additional Feature Grid */}
                <section className="grid  mt-12 grid-cols-[repeat(2,1fr)] max-md:grid-cols-[1fr] justify-center items-center place-items-center">
                    {additionalFeatures.map((feature, index) => (
                        <motion.article
                            key={index}
                            className="p-4 bg-white rounded-lg shadow-lg w-[500px] max-sm:w-full"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <h3 className="mb-4 text-xl font-bold text-sky-700 max-sm:text-lg">
                                {feature.title}
                            </h3>
                            <div className="text-md text-black max-sm:text-base">
                                {feature.items.map((item, itemIndex) => (
                                    <p key={itemIndex} className="mb-2">
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </motion.article>
                    ))}
                </section>

            </section>

            {/* Decorative Lines */}

        </main>
    );
};

export default AboutFrame;
