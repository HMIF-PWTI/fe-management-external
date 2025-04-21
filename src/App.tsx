import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderNavigation from "./components/Layouts/HeaderNavigation";
import Footer from "./components/Layouts/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";


function App() {
  return (
    <BrowserRouter>
    <div className="flex flex-col min-h-screen">
      <HeaderNavigation />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
