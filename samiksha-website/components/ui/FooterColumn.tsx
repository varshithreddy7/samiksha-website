import * as React from "react";

interface FooterLink {

    text: string;

    href: string;

}

interface FooterColumnProps {

    title: string;

    links: FooterLink[];

}

export const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {

    return (
        <section className="w-[33%] max-md:ml-0 max-md:w-full">
            <nav className="flex flex-col mt-2 text-2xl text-white max-md:mt-10">
                <h2 className="self-start font-medium text-center">{title}</h2>
                <ul className="mt-7 space-y-1">

                    {links.map((link, index) => (
                        <li key={index}>
                            <a

                                href={link.href}

                                className="hover:text-gray-300 transition-colors"
                            >

                                {link.text}
                            </a>
                        </li>

                    ))}
                </ul>
            </nav>
        </section>

    );

};

