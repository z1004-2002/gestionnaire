import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import './styles/index.css'
import DashboardController from "./pages/DashboardController";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/controller" element={<DashboardController/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
