import React from "react";
import Menu from "../menu/Menu";

interface Link {
    titulo: string;
    href: string;
}

interface HeaderProps {
    links: Link[];
}

const Header: React.FC<HeaderProps> = ({ links }) => {

    return (
        <header className="flex w-full items-center justify-around bg-black py-4 px-[2rem] shadow-neutral-900 text-white shadow-xl rounded-b-lg font-[montserratBold] mb-10">
            <div className="max-sm:flex-col flex w-[100%] sm:w-[90%] items-center justify-between">
                <a href="/" className="hover:underline text-[1.5rem]">
                    Início
                </a>
                <Menu
                    links={links}
                />
            </div>
        </header>
    );
};

export default Header;
