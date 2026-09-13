import "./App.css";
import { Routes, Route } from "react-router";
import VelgSpiller from "./pages/VelgSpiller";
import Regler from "./pages/Regler";
import Spill from "./pages/Spill";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<VelgSpiller />} />
        <Route path="/spill" element={<Spill />} />
        <Route path="/regler" element={<Regler />} />
      </Routes>
    </>
  );
}

export default App;
