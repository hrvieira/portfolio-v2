import FormContato from "./components/contato/FormContato";
import Header from "./components/header/Header";
import Projetos from "./components/projetos/Projetos";
import SobreMim from "./components/sobremim/SobreMim";
import Home from "./pages/home/Home";

function App() {
    return (
        <>
            <Header
                links={[
                    { titulo: "Projetos", href: "#projetos" },
                    { titulo: "Sobre mim", href: "#sobremim" },
                    { titulo: "Contato", href: "#contato" },
                ]}
            />
            <Home />
            <section id="projetos">
                <Projetos />
            </section>
            <section id="sobremim">
                <SobreMim />
            </section>
            <section id="contato">
                <FormContato />
            </section>
        </>
    );
}
export default App;
