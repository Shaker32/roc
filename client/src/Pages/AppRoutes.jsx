import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Obchod from "./Obchod";
import ChovatelskePotreby from "./ChovatelskePotreby";
import DetailProduktu from "./DetailProduktu"; 
import DetailZvirete from "./DetailZvirete"; 
import Kontakt from "./Kontakt";
import Recenze from "./Recenze";
import ONas from "./ONas";
import Kosik from './Kosik'; 
import ObjednavkaForm from "./ObjednavkaForm";
import PlatbaKartou from "./PlatbaKartou"; 
import Shrnuti from "./Shrnuti"; 




export default function AppRoutes() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/obchod" element={<Obchod/>} />
      <Route path="/zvire/:id" element={<DetailZvirete />} />
      <Route path="/chovatelske-potreby" element={<ChovatelskePotreby/>} />
      <Route path="/produkt/:id" element={<DetailProduktu />} /> 
      <Route path="/detail-zvirete" element={<DetailZvirete/>} />
      <Route path="/kontakt" element={<Kontakt/>} />
      <Route path="/recenze" element={<Recenze/>} />
      <Route path="/o-nas" element={<ONas/>} />
      <Route path="/kosik" element={<Kosik/>} />
      <Route path="/objednavka-form" element={<ObjednavkaForm/>} />
      <Route path="/platba-kartou" element={<PlatbaKartou />} />
      <Route path="/shrnutí" element={<Shrnuti />} />

      



    </Routes>
    </BrowserRouter>
    </>
  );
};

