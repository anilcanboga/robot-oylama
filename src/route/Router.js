import { BrowserRouter, Routes, Route } from "react-router-dom";
import CompetiterDetails from "../components/CompetiterDetail/CompetiterDetail";
import Competiters from "../components/Competiters/Competiters";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Competiters />} />
        <Route path="/user/:id" element={<CompetiterDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
