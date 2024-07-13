import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
/* import Header from "./components/header/Header"; */
import Home from "./pages/home/Home";
import Projetos from "./components/projetos/Projetos";
import SobreMim from "./components/sobremim/SobreMim";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/header/Navbar";
import FormContato from "./components/contato/FormContato";

const App: React.FC = () => {
    return (
        <div className="h-[100vh]">
            <Router>
                <Navbar />
                <ToastContainer />
                <Home />
                <Projetos />
                <SobreMim />
                <FormContato />
                {/* <Header /> */}
                <Footer />
            </Router>
        </div>
    );
};

export default App;
