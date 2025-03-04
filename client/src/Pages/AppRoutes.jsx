import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Obchod from "./Obchod";

import ChovatelskePotreby from "./ChovatelskePotreby";
import ProdejZvire from "./ProdejZvire";
import Kontakt from "./Kontakt";
import Recenze from "./Recenze";
import ONas from "./ONas";
import Kosik from './Kosik'; 




export default function AppRoutes() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/obchod" element={<Obchod/>} />
      <Route path="/chovatelske-potreby" element={<ChovatelskePotreby/>} />
      <Route path="/prodej-zvire" element={<ProdejZvire/>} />
      <Route path="/kontakt" element={<Kontakt/>} />
      <Route path="/recenze" element={<Recenze/>} />
      <Route path="/o-nas" element={<ONas/>} />
      <Route path="/kosik" element={<Kosik/>} />



    </Routes>
    </BrowserRouter>
    </>
  );
};

