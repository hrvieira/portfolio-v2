import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import FormContato from "./components/contato/FormContato";
import Projetos from "./components/projetos/Projetos";
import SobreMim from "./components/sobremim/SobreMim";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contato" element={<FormContato />} />
                    <Route path="/projetos" element={<Projetos />} />
                    <Route path="/sobremim" element={<SobreMim />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default App;
