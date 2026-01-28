import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import CatalogPage from "../pages/CatalogPage";
// import CamperDetailsPage from "../pages/CamperDetailsPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage />} /> 
      {/* <Route path="/catalog/:id" element={<CamperDetailsPage />} />  */}
    </Routes>
  );
}
