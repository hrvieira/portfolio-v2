import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
/* import Header from "./components/header/Header"; */
import Home from "./pages/home/Home";
import Projetos from "./components/projetos/Projetos";
import SobreMim from "./components/sobremim/SobreMim";
import FormContato from "./components/contato/FormContato";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/header/Navbar";

const App: React.FC = () => {
    return (
        <div className="h-[100vh]">
            <Router>
                {/* <Header /> */}
                <Navbar />
                <ToastContainer />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projetos" element={<Projetos />} />
                    <Route path="/sobremim" element={<SobreMim />} />
                    <Route path="/contato" element={<FormContato />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
