import { Link } from "react-router-dom";

interface Card {
    imagem: string;
    nome: string;
    descricao: string;
    deploy: string;
}

const cards: Card[] = [
    {
        imagem: "https://ik.imagekit.io/hrvieira/Portf%C3%B3lio/portfolio.png?updatedAt=1719098015142",
        nome: "Portfólio",
        descricao:
            "Portfólio criado usando TypeScript, React e Tailwind. Site responsivo com o intuito de facilitar a divulgação de meu trabalho.",
        deploy: "https://portfolio-luizhrvieira.vercel.app/",
    },
    {
        imagem: "https://ik.imagekit.io/hrvieira/Portf%C3%B3lio/greenconomy.png?updatedAt=1719106029375",
        nome: "Green Economy",
        descricao:
            "Projeto usando TypeScript, Nest, Jest, React e Tailwind. E-commerce baseado na ODS-12, onde pessoas podem comprar e vender produtos sustentáveis, ajudando na diminuição de materiais jogados no meio ambiente, consumo e produção sustentável.",
        deploy: "https://greenconomy.netlify.app/",
    },
    {
        imagem: "https://ik.imagekit.io/hrvieira/Portf%C3%B3lio/universe.png?updatedAt=1719097994710",
        nome: "Universe",
        descricao:
            "Projeto criado usando TypeScript, React e CSS3. Site para insetivar o uso de um portfólio e integração a API do GitHub",
        deploy: "https://universe-react.vercel.app/",
    },
    {
        imagem: "https://ik.imagekit.io/hrvieira/Portf%C3%B3lio/Beige%20Brown%20Aesthetic%20Save%20The%20Date%20Editable%20Mockup%20Instagram%20Post.png?updatedAt=1719100489486",
        nome: "Blog Pessoal",
        descricao:
            "Projeto criado usando TypeScript, Nest, Jest, React e Tailwind. Criar um blog com Front end e Back end bem estruturado. Podendo fazer postagens com diversos temas.",
        deploy: "https://blog-pessoal-hrvieira.vercel.app/",
    },
    {
        imagem: "https://ik.imagekit.io/hrvieira/Portf%C3%B3lio/linksgen.png?updatedAt=1719106078559",
        nome: "Links Generation",
        descricao:
            "Projeto criado com JavaScript, HTML5 e CSS3. Site simples para facilidade do curso da Generation Brasil, onde a turma JS 05 conseguia acessar com mais facilidade os links que precisavamos para o nosso dia a dia de estudos.",
        deploy: "https://linksgen.vercel.app/",
    },
];

function Projetos() {
    return (
        <main className="my-4 w-full">
            <div className="grid max-mobile:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 lg:grid-cols-4 gap-4 w-[90%] mx-auto">
                {cards.map((card) => (
                    <div className="flex flex-col mt-6 shadow-md hover:shadow-2xl transition duration-500 rounded-2xl place-items-center border-2 ">
                        <img
                            className="rounded-t-xl shadow-lg box-border"
                            src={card.imagem}
                            alt="card-image"
                        />
                        <div className="flex flex-col flex-grow w-[85%]">
                            <div className="py-2 mt-2 grow">
                                <h1 className="mb-1 text-[1.2rem] font-[montserratBold] text-center">
                                    {card.nome}
                                </h1>
                                <h3 className="font-[glacialIndifference] text-justify">
                                    {card.descricao}
                                </h3>
                            </div>

                            <Link
                                to={card.deploy}
                                className="text-gray-700 hover:text-black hover:underline hover:underline-offset-2 font-bold rounded-lg shadow-lg py-2 mb-2 border-2 text-center"
                                target="_blank"
                            >
                                Acesse aqui
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Projetos;
