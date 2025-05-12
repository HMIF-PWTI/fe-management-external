import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderNavigation from "@/components/Layouts/HeaderNavigation";
import Footer from "@/components/Layouts/Footer";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import BlogPage from "@/pages/BlogPage";
import KegiatanPage from "@/pages/KegiatanPage";
import IfPediaPage from "@/pages/IfPediaPage";
import LapakKwuPage from "@/pages/LapakKwuPage";
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
            <Route path="/kegiatan" element={<KegiatanPage />} />
            <Route path="/lapakkwu" element={<LapakKwuPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
