import { useEffect, useState } from "react";

interface Profile {
    avatar_url: string;
    name: string;
    html_url: string;
    followers: number;
    public_repos: number;
}

const SobreMim: React.FC = () => {
    const [profile, setProfile] = useState<Profile | null>(null);

    useEffect(() => {
        const getGitHubAPI = async () => {
            try {
                const response = await fetch(
                    "https://api.github.com/users/hrvieira"
                );
                const data: Profile = await response.json();
                setProfile(data);
            } catch (error) {
                console.error(error);
            }
        };

        getGitHubAPI();
    }, []);

    return (
        <>
            {profile && (
                <>
                    <main className="w-[85%] flex max-lg:flex-col items-center mx-auto py-3 gap-8">
                        <img
                            src="./1710343495237.jpg"
                            alt={`Foto do perfil do GitHub - ${profile.name}`}
                            className="w-[35%] max-w-[350px] rounded-full border-black border-4 shadow-[#525252] drop-shadow-[0px_0px_3px_var(--tw-shadow-color)]"
                        />
                        <article className="lg:w-[75%] flex flex-col items-center">
                            <h2 className="text-[2rem] font-[montserratBold] drop-shadow-[1px_1px_var(--tw-shadow-color)] shadow-[#525252]">
                                Quem sou eu?
                            </h2>
                            <p className="my-2 font-sans text-[1.1rem]">
                                Oi, meu nome é Henrique, 31 anos, do Rio de
                                Janeiro, mas especificamente, cresci na Baixada
                                Fluminense. Aprendendi a ser responsável e
                                determinado como filho de mãe solteira. Pai de
                                uma menina, logo de um menino, percebi que o
                                tempo é agora para mudar minha vida. Desde
                                criança, tenho interesse em tecnologia. Aos 15
                                anos, trabalhei em uma lan house, onde aprendi
                                sobre redes e hardware. Depois, trabalhei com
                                CFTV, mas segui carreira na Educação Física,
                                atuando como coach de cross há 4 anos. Sempre
                                mantive meu interesse em tecnologia e, em 2022,
                                tive meu primeiro contato com programação. Em
                                2023, participei do Projeto Desenvolve do Grupo
                                Boticário, estudando na Alura por 6 meses.
                                Atualmente, curso Análise e Desenvolvimento de
                                Sistemas e estou na turma 04 JavaScript Full
                                Stack da Generation Brasil. Aqui, aprendo desde
                                a lógica de programação até o desenvolvimento
                                back-end, front-end e banco dados. Além das
                                habilidades técnicas, desenvolvo minhas soft
                                skills, essenciais para o mercado de trabalho.
                                Pratico diariamente para me manter atualizado e
                                consolidar o aprendizado. Para saber mais sobre
                                minha jornada, projetos e estudos, confira meu
                                LinkedIn ou GitHub.
                            </p>
                            <div
                                className="w-[70%] my-4 flex justify-evenly items-center"
                                id="div-quem-sou"
                            >
                                <a
                                    href={profile.html_url}
                                    className="my-2 py-2 px-8 font-sans text-[1.1rem] font-semibold bg-black text-white rounded-md hover:drop-shadow-[0px_0px_3px_var(--tw-shadow-color)] shadow-[#525252] hover:text-gray-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Github
                                </a>
                                <p className="my-2 font-sans text-[1.1rem] font-semibold">
                                    {profile.followers} Seguidores
                                </p>
                                <p className="my-2 font-sans text-[1.1rem] font-semibold">
                                    {profile.public_repos} Repositórios
                                </p>
                            </div>
                        </article>
                    </main>
                </>
            )}
        </>
    );
};

export default SobreMim;
