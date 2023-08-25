import React from "react";
import github from "public/icons/github.svg";
import Image from "next/image";

const Footer = () => {
    return (
        <footer
            className="footer footer-center p-10 text-base-content bg-transparent"
        >
            <p>Connect with me!</p>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a href="mailto:iso_yaman@outlook.com">
                        <Image
                            className="hover:cursor-pointer"
                            src={github}
                            height={40}
                            alt="Email"
                        />
                    </a>
                    <a href="https://github.com/IsmailYaman">
                        <Image
                            className="hover:cursor-pointer"
                            src={github}
                            height={40}
                            alt="Github"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/ismail-kayadelen-56a0b6133/">
                        <Image
                            className="hover:cursor-pointer"
                            src={github}
                            height={40}
                            alt="LinkedIn"
                        />
                    </a>
                </div>
            </div>
            <div>
                <p>Ismail Kayadelen | 2023</p>
            </div>
        </footer>
    );
};

export default Footer;