import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import './styles/index.css'
import DashboardController from "./pages/Controller/DashboardController";
import NotFound from "./pages/NotFound";
import ContNew from "./pages/Controller/ContNew";
import ContAssi from "./pages/Controller/ContAssi";
import ContPro from "./pages/Controller/ContPro";
import ContTravCours from "./pages/Controller/ContTravCours";
import ContTravTerm from "./pages/Controller/ContTravTerm";
import ContProTerm from "./pages/Controller/ContProTerm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/controller/accueil" element={<DashboardController/>}></Route>
        <Route path="/controller/nouveau" element={<ContNew/>}></Route>
        <Route path="/controller/assigne" element={<ContAssi/>}></Route>
        <Route path="/controller/travaux_programme" element={<ContPro/>}></Route>
        <Route path="/controller/travaux_en_cours" element={<ContTravCours/>}></Route>
        <Route path="/controller/travaux_termine" element={<ContTravTerm/>}></Route>
        <Route path="/controller/projet_termine" element={<ContProTerm/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
