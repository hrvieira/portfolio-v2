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
                <main className="flex justify-center mt-4">
                    <div className="w-[85%] flex max-lg:flex-col items-center py-3 gap-8">
                        <img
                            src="https://ik.imagekit.io/hrvieira/1710343495237.jpg"
                            alt={`Foto do perfil do GitHub - ${profile.name}`}
                            className="w-[35%] max-w-[350px] rounded-full border-black border-4 shadow-[#525252] drop-shadow-[0px_0px_3px_var(--tw-shadow-color)]"
                        />
                        <article className="lg:w-[75%] flex flex-col items-center text-justify">
                            <h2 className="text-[2rem] font-[montserratBold] drop-shadow-[1px_1px_var(--tw-shadow-color)] shadow-[#525252]">
                                Quem sou eu?
                            </h2>
                            <p className="mb-1 font-sans text-[1.1rem] indent-8">
                                Oi, sou Henrique, 31 anos, do Rio de Janeiro.
                                Nascido e criado na Baixada Fluminense (RJ) com
                                minha mãe solteira, o que me ensinou
                                responsabilidade. Pai de um casal, decidi mudar
                                minha vida, pois quero poder passar mais tempo
                                com eles.
                            </p>
                            <p className="mb-1 font-sans text-[1.1rem] indent-8">
                                {" "}
                                Sempre fui interessado em tecnologia. Aos 15
                                anos, trabalhei em uma lan house e aprendi sobre
                                redes e hardware. Depois, atuei com CFTV. Por opotunidade, migrei para Educação Física e atuo a 4 anos como coach de cross.
                            </p>
                            <p className="mb-1 font-sans text-[1.1rem] indent-8">
                                {" "}
                                Em 2022, comecei a estudar programação. Em 2023,
                                participei do Projeto Desenvolve do Grupo
                                Boticário, estudando na Alura e já criando alguns projetos para praticar o que ia aprendendo. No ínicio de 2024 comecei a cursar Análise e Desenvolvimento de Sistemas, além de ter participado da turma 04 JavaScript Full Stack da
                                Generation Brasil. Onde tive a experiência de um trabalho remoto, estudando de 8 às 17 horas. Aprendo desde lógica de
                                programação, back-end, front-end e banco de
                                dados e desenvolver minhas soft skills, para me tornar o desenvolvedor que o mercado procura.
                            </p>
                            <p className="mb-1 font-sans text-[1.1rem]">
                                Para saber mais sobre minha jornada, projetos e
                                estudos, confira meu LinkedIn ou GitHub.
                            </p>
                            <div className="w-[80%] my-4 flex max-sm:flex-col justify-evenly items-center">
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
                    </div>
                </main>
            )}
        </>
    );
};

export default SobreMim;
