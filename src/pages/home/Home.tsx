import { Envelope, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

function Home() {

    const [isSticky, setIsSticky] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY < 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const data = new Date();
    const hora = data.getHours();

    let saudacao;
    if (hora < 12) {
        saudacao = "Bom dia,";
    } else if (hora < 18) {
        saudacao = "Boa tarde,";
    } else {
        saudacao = "Boa noite,";
    }

    return (
        <main>
            <div className="flex flex-col items-center">
                <section className="flex flex-col items-center justify-around mt-16 mb-24 w-[90%] text-center">
                    <h1 className="text-[2.5rem] font-[montserratBold] drop-shadow-[1px_1px_1px_var(--tw-shadow-color)] shadow-[#525252]">
                        {saudacao} meu nome é
                    </h1>
                    <h1 className="text-[7rem] font-[playlistScript] drop-shadow-[0px_0px_1.5px_var(--tw-shadow-color)] shadow-[#525252] leading-snug">
                        Henrique Vieira
                    </h1>
                    <p className="text-[1.2rem] font-[GlacialIndifference-Bold] uppercase tracking-widest">
                        Desenvolvedor
                    </p>
                </section>
            </div>
            <nav
                className={`max-sm:hidden fixed m-0 p-0 translate-y-10 top-[5rem] ${
                    isSticky ? "sticky top-0" : ""
                }`}
            >
                <ul className="fixed m-0 p-0 translate-y-1 top-[5rem]">
                    <li className="mx-[.5rem] my-[.5rem] px-[1px] bg-white rounded-lg drop-shadow-[0px_0px_1px_var(--tw-shadow-color)] shadow-[#525252]">
                        <a
                            href="https://www.linkedin.com/in/luizhrvieira/"
                            target="_blank"
                        >
                            <LinkedinLogo size={50} weight="bold" />
                        </a>
                    </li>
                    <li className="mx-[.5rem] my-[.5rem] px-[1px] bg-white rounded-lg drop-shadow-[0px_0px_1px_var(--tw-shadow-color)] shadow-[#525252]">
                        <a href="https://github.com/hrvieira" target="_blank">
                            <GithubLogo size={50} weight="bold" />
                        </a>
                    </li>
                    <li className="mx-[.5rem] my-[.5rem] px-[1px] bg-white rounded-lg drop-shadow-[0px_0px_1px_var(--tw-shadow-color)] shadow-[#525252]">
                        <a
                            href="mailto:luizhrvieira@outlook.com"
                            target="_blank"
                        >
                            <Envelope size={50} weight="bold" />
                        </a>
                    </li>
                </ul>
            </nav>
        </main>
    );
}

export default Home;
