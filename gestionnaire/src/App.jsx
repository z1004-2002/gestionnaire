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

import DashboardCharge from "./pages/charge/DashboardCharge";
import ChargeNew from "./pages/charge/ChargeNew";
import ChargeAssi from "./pages/charge/ChargeAssi";
import ChargePro from "./pages/charge/ChargePro";
import ChargeTravCours from "./pages/charge/ChargeTravCours";
import ChargeTravTerm from "./pages/charge/ChargeTravTerm";
import ChargeProTerm from "./pages/charge/ChargeProTerm";

import DashboardChef from "./pages/chef/DashboardChef";
import ChefNew from "./pages/chef/ChefNew";
import ChefAssi from "./pages/chef/ChefAssi";
import ChefPro from "./pages/chef/ChefPro";
import ChefTravCours from "./pages/chef/ChefTravCours";
import ChefTravTerm from "./pages/chef/ChefTravTerm";
import ChefProTerm from "./pages/chef/ChefProTerm";

import DashboardOrdre from "./pages/ordre/DashboardOrdre";
import OrdreNew from "./pages/ordre/OrdreNew";
import OrdreAssi from "./pages/ordre/OrdreAssi";
import OrdrePro from "./pages/ordre/OrdrePro";
import OrdreTravCours from "./pages/ordre/OrdreTravCours";
import OrdreTravTerm from "./pages/ordre/OrdreTravTerm";
import OrdreProTerm from "./pages/ordre/OrdreProTerm";

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


        <Route path="/charge_exploitation/accueil" element={<DashboardCharge/>}></Route>
        <Route path="/charge_exploitation/nouveau" element={<ChargeNew/>}></Route>
        <Route path="/charge_exploitation/assigne" element={<ChargeAssi/>}></Route>
        <Route path="/charge_exploitation/travaux_programme" element={<ChargePro/>}></Route>
        <Route path="/charge_exploitation/travaux_en_cours" element={<ChargeTravCours/>}></Route>
        <Route path="/charge_exploitation/travaux_termine" element={<ChargeTravTerm/>}></Route>
        <Route path="/charge_exploitation/projet_termine" element={<ChargeProTerm/>}></Route>

        <Route path="/chef_exploitation/accueil" element={<DashboardChef/>}></Route>
        <Route path="/chef_exploitation/nouveau" element={<ChefNew/>}></Route>
        <Route path="/chef_exploitation/assigne" element={<ChefAssi/>}></Route>
        <Route path="/chef_exploitation/travaux_programme" element={<ChefPro/>}></Route>
        <Route path="/chef_exploitation/travaux_en_cours" element={<ChefTravCours/>}></Route>
        <Route path="/chef_exploitation/travaux_termine" element={<ChefTravTerm/>}></Route>
        <Route path="/chef_exploitation/projet_termine" element={<ChefProTerm/>}></Route>

        <Route path="/ordonancement_plannification/accueil" element={<DashboardOrdre/>}></Route>
        <Route path="/ordonancement_plannification/nouveau" element={<OrdreNew/>}></Route>
        <Route path="/ordonancement_plannification/assigne" element={<OrdreAssi/>}></Route>
        <Route path="/ordonancement_plannification/travaux_programme" element={<OrdrePro/>}></Route>
        <Route path="/ordonancement_plannification/travaux_en_cours" element={<OrdreTravCours/>}></Route>
        <Route path="/ordonancement_plannification/travaux_termine" element={<OrdreTravTerm/>}></Route>
        <Route path="/ordonancement_plannification/projet_termine" element={<OrdreProTerm/>}></Route>

        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
