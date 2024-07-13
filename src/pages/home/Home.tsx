import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";

interface Skill {
    src: string;
    alt: string;
    descricao: string;
}

const skills: Skill[] = [
    {
        src: "https://ik.imagekit.io/hrvieira/Portf%C3%B3lio/typecript-logo.png?updatedAt=1720903364884",
        alt: "TypeScript logo",
        descricao: "Desenvolvimento em TypeScript",
    },
    {
        src: "https://ik.imagekit.io/hrvieira/Portf%C3%B3lio/javascript-logo.png?updatedAt=1720903618118",
        alt: "JavaScript logo",
        descricao: "Desenvolvimento em JavaScript",
    },
    {
        src: "https://ik.imagekit.io/hrvieira/Portf%C3%B3lio/react-logo.png?updatedAt=1720904724265",
        alt: "React logo",
        descricao: "Desenvolvimento Front-end em TypeScript usando React",
    },
    {
        src: "https://ik.imagekit.io/hrvieira/Portf%C3%B3lio/tailwind.png?updatedAt=1720905721142",
        alt: "Tailwind logo",
        descricao: "Estilização usando Tailwind",
    },
    {
        src: "https://ik.imagekit.io/hrvieira/Portf%C3%B3lio/nestjs-logo.png?updatedAt=1720905042421",
        alt: "Nest logo",
        descricao: "Desenvolvimento de Back-end em TypeScript usando Nest",
    },
    {
        src: "https://ik.imagekit.io/hrvieira/Portf%C3%B3lio/nodejs-logo.png?updatedAt=1720906296060",
        alt: "Node logo",
        descricao: "Desenvolvimento de Back-end em TypeScript e JavaScript usando Node",
    },
    {
        src: "https://ik.imagekit.io/hrvieira/Portf%C3%B3lio/103283236.png?updatedAt=1720903994684",
        alt: "Jest logo",
        descricao: "Criação de testes automatizados e unitários usando Jest",
    },
];

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
        <section
            className="flex flex-col justify-center items-center py-[6rem] max-mobile:py-[2rem] w-full bg-gradient-to-b from-white from-90% to-slate-100"
            id="inicio"
        >
            <div className="flex flex-col items-center w-[90%] text-center">
                <h1 className="text-[2.5rem] font-[montserratBold] drop-shadow-[1px_1px_1px_var(--tw-shadow-color)] shadow-[#525252]">
                    {saudacao} meu nome é
                </h1>
                <h1 className="text-[5rem] sm:text-[7rem] font-[playlistScript] drop-shadow-[0px_0px_1.5px_var(--tw-shadow-color)] shadow-[#525252] leading-snug">
                    Henrique Vieira
                </h1>
                <p className="text-[1.2rem] font-[GlacialIndifference-Bold] uppercase tracking-widest">
                    Desenvolvedor
                </p>
                <ul className="flex my-8 gap-2 max-mobile:flex-wrap justify-center">
                    {skills.map((skill) => (
                        <li className="flex flex-col items-center gap-2">
                            <Tooltip
                                title={skill.descricao}
                                TransitionComponent={Zoom}
                                arrow
                            >
                                <img
                                    className="h-[5rem] max-w-[5rem] rounded-full shadow-md hover:shadow-2xl transition duration-500 border-2 p-2"
                                    src={skill.src}
                                    alt={skill.alt}
                                />
                            </Tooltip>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-10 mt-[4rem] max-mobile:mt-[0rem] animate-bounce">
                <ExpandCircleDownIcon fontSize="large" />
            </div>
        </section>
    );
}

export default Home;
