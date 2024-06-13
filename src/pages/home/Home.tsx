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
        <main className="min-h-[65dvh]">
            <div className="flex flex-col items-center">
                <section className="flex flex-col items-center justify-around mt-6 sm:mt-20 w-[90%] text-center">
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
           
        </main>
    );
}

export default Home;
