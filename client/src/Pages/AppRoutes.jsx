import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Obchod from "./Obchod";

export default function AppRoutes() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/Obchod" element={<Obchod/>} />

    </Routes>
    </BrowserRouter>
    </>
  );
};

