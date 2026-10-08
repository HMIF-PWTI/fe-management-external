import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderNavigation from "@/components/Layouts/HeaderNavigation";
import Footer from "@/components/Layouts/Footer";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import BlogPage from "@/pages/BlogPage";
import KegiatanPage from "@/pages/KegiatanPage";
import IfPediaPage from "@/pages/IfPediaPage";
import HmifPediaPage from "@/pages/HmifPediaPage";
import LapakKwuPage from "@/pages/LapakKwuPage";
import InfoKp from "./pages/InfoKp";
import Kabinet from "./pages/KabinetPage";
import DevelopersPage from "@/pages/DevelopersPage";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <HeaderNavigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/ifpedia" element={<IfPediaPage />} />
            <Route path="/hmif-pedia" element={<HmifPediaPage />} />
            <Route path="/kegiatan" element={<KegiatanPage />} />
            <Route path="/lapakkwu" element={<LapakKwuPage />} />
            <Route path="/infokp" element={<InfoKp />} />
            <Route path="/kabinet" element={<Kabinet />} />
            <Route path="/developers" element={<DevelopersPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
