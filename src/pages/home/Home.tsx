function Home() {

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
        <main className="flex justify-center items-center h-[70%] w-full">
                <section className="flex flex-col items-center w-[90%] text-center">
                    <h1 className="text-[2.5rem] font-[montserratBold] drop-shadow-[1px_1px_1px_var(--tw-shadow-color)] shadow-[#525252]">
                        {saudacao} meu nome é
                    </h1>
                    <h1 className="text-[5rem] sm:text-[7rem] font-[playlistScript] drop-shadow-[0px_0px_1.5px_var(--tw-shadow-color)] shadow-[#525252] leading-snug">
                        Henrique Vieira
                    </h1>
                    <p className="text-[1.2rem] font-[GlacialIndifference-Bold] uppercase tracking-widest">
                        Desenvolvedor
                    </p>
                </section>
                
        </main>
    );
}

export default Home;
