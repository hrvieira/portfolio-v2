const ano = new Date().getFullYear();

function Footer() {
    return (
        <footer className="flex w-full items-center justify-around bg-black py-10 px-[2rem] shadow-neutral-900 text-white shadow-inner font-[montserratBold] mt-10">
            <div className="container mx-auto text-center">
                © {ano} Portfólio |{" "}
                <a
                    className="hover:underline hover:text-gray-300"
                    href="https://hvieira.vercel.app/"
                >
                    hrvieira.dev
                </a>
            </div>
        </footer>
    );
}

export default Footer;
