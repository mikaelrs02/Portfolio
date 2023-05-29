import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Start from "./components/main/start/start";
import AboutMe from "./components/main/about_me/about_me";
import Technolgies from "./components/main/technologies/technolgies";
import FrontEnd from "./components/main/technologies/frontend";
import BackEnd from "./components/main/technologies/backend";
import DataBase from "./components/main/technologies/database";
import Tools from "./components/main/technologies/tools";
import Projects from "./components/main/projects/projects";
import Footer from "./components/footer/footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Start />
        <AboutMe />
        <Technolgies />
        <Routes>
          <Route path="/" element={<FrontEnd />} />
          <Route path="/BackEnd" element={<BackEnd />} />
          <Route path="/BDados" element={<DataBase />} />
          <Route path="/Tools" element={<Tools />} />
        </Routes>
        <Projects />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
