import { Routes, Route } from "react-router-dom";
import HomePage from "../views/HomePage";
import DetailPage from "../views/DetailPage";
import FormPage from "../components/FormPage";
import MainTablePage from "../views/MainTablePage";
import EditPage from "../components/EditPage";

export default function RoutesPage() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/table" element={<MainTablePage />} />
      <Route path="/edit/:id" element={<EditPage />} />
    </Routes>
  );
}
