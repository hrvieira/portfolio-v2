import { Envelope, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Header: React.FC = () => {
    const [isSticky, setIsSticky] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY < 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const btnMobile = document.getElementById("btn-mobile");
        const mobileMenu = document.getElementById("mobile-menu");
        const inicioLink = document.getElementById("inicio");

        function toggleMenu(event: Event) {
            if (event.type === "touchstart") event.preventDefault();
            if (mobileMenu) {
                mobileMenu.classList.toggle("hidden");
                const active = !mobileMenu.classList.contains("hidden");
                if (event.currentTarget) {
                    (event.currentTarget as HTMLElement).setAttribute(
                        "aria-expanded",
                        active.toString()
                    );
                    if (active) {
                        (event.currentTarget as HTMLElement).setAttribute(
                            "aria-label",
                            "Fechar menu"
                        );
                    } else {
                        (event.currentTarget as HTMLElement).setAttribute(
                            "aria-label",
                            "Abrir menu"
                        );
                    }
                }
            }
        }

        function handleLinkClick() {
            if (mobileMenu) {
                mobileMenu.classList.add("hidden");
            }
        }

        if (btnMobile) {
            btnMobile.addEventListener("click", toggleMenu);
            btnMobile.addEventListener("touchstart", toggleMenu);
        }

        const mobileLinks = document.querySelectorAll("#mobile-menu a");
        mobileLinks.forEach((link) => {
            link.addEventListener("click", handleLinkClick);
        });

        if (inicioLink) {
            inicioLink.addEventListener("click", handleLinkClick);
        }

        return () => {
            if (btnMobile) {
                btnMobile.removeEventListener("click", toggleMenu);
                btnMobile.removeEventListener("touchstart", toggleMenu);
            }
            mobileLinks.forEach((link) => {
                link.removeEventListener("click", handleLinkClick);
            });
            if (inicioLink) {
                inicioLink.removeEventListener("click", handleLinkClick);
            }
        };
    }, []);

    return (
        <>
            <header className="flex w-full items-center justify-around bg-black py-4 px-[2rem] shadow-neutral-900 text-white shadow-lg font-[montserratBold] mb-10">
                <div className="flex w-[100%] sm:w-[90%] items-center justify-between">
                    <Link
                        className="text-lg hover:text-gray-300"
                        id="inicio"
                        to="/"
                    >
                        Início
                    </Link>
                    <nav className="relative">
                        <ul
                            id="nav"
                            className="hidden md:flex gap-12"
                            role="menu"
                        >
                            <li className="self-center text-base">
                                <Link
                                    className="block p-2 hover:text-gray-300"
                                    to="/projetos"
                                >
                                    Projetos
                                </Link>
                            </li>
                            <li className="self-center text-base">
                                <Link
                                    className="block p-2 hover:text-gray-300"
                                    to="/sobremim"
                                >
                                    Sobre mim
                                </Link>
                            </li>
                            <li className="self-center text-base">
                                <Link
                                    className="block p-2 hover:text-gray-300"
                                    to="/contato"
                                >
                                    Contato
                                </Link>
                            </li>
                        </ul>
                        <button
                            aria-label="Abrir menu"
                            id="btn-mobile"
                            aria-haspopup="true"
                            aria-controls="menu"
                            aria-expanded="false"
                            className="md:hidden p-4 text-white bg-transparent"
                        >
                            <span className="block w-6 border-t-2 border-white mb-1"></span>
                            <span className="block w-6 border-t-2 border-white mb-1"></span>
                            <span className="block w-6 border-t-2 border-white"></span>
                        </button>
                        <ul
                            className="fixed top-[5rem] z-50 right-0 bg-black h-full text-white w-full flex-col hidden md:hidden text-center divide-y divide-white/30"
                            id="mobile-menu"
                        >
                            <li className="self-center text-base divide-white">
                                <Link
                                    className="block p-4 hover:bg-gray-700"
                                    to="/projetos"
                                >
                                    Projetos
                                </Link>
                            </li>
                            <li className="self-center text-base">
                                <Link
                                    className="block p-4 hover:bg-gray-700"
                                    to="/sobremim"
                                >
                                    Sobre mim
                                </Link>
                            </li>
                            <li className="self-center text-base">
                                <Link
                                    className="block p-4 hover:bg-gray-700"
                                    to="/contato"
                                >
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <nav
                className={`max-md:hidden fixed m-0 p-0 translate-y-10 top-[5rem] ${
                    isSticky ? "sticky top-0" : ""
                }`}
            >
                <ul className="fixed m-0 p-0 translate-y-1 top-[5rem] text-black">
                    <li className="mx-[.5rem] my-[.5rem] px-[1px] bg-white rounded-lg shadow-inner shadow-[#525252] hover:drop-shadow-[0px_0px_3px_var(--tw-shadow-color)]">
                        <a
                            href="https://www.linkedin.com/in/luizhrvieira/"
                            target="_blank"
                        >
                            <LinkedinLogo size={50} weight="bold" />
                        </a>
                    </li>
                    <li className="mx-[.5rem] my-[.5rem] px-[1px] bg-white rounded-lg shadow-inner shadow-[#525252] hover:drop-shadow-[0px_0px_3px_var(--tw-shadow-color)]">
                        <a href="https://github.com/hrvieira" target="_blank">
                            <GithubLogo size={50} weight="bold" />
                        </a>
                    </li>
                    <li className="mx-[.5rem] my-[.5rem] px-[1px] bg-white rounded-lg shadow-inner shadow-[#525252] hover:drop-shadow-[0px_0px_3px_var(--tw-shadow-color)]">
                        <a
                            href="mailto:luizhrvieira@outlook.com"
                            target="_blank"
                        >
                            <Envelope size={50} weight="bold" />
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Header;
